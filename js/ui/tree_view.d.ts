import { DataSourceLike } from '../data/data_source';
import {
    DxElement,
} from '../core/element';

import {
    DxPromise,
} from '../core/utils/deferred';

import {
    EventInfo,
    NativeEventInfo,
    InitializedEventInfo,
    ChangedOptionInfo,
} from '../events/index';

import {
    CollectionWidgetItem,
} from './collection/ui.collection_widget.base';

import HierarchicalCollectionWidget, {
    HierarchicalCollectionWidgetOptions,
} from './hierarchical_collection/ui.hierarchical_collection_widget';

import {
    SearchBoxMixinOptions,
} from './widget/ui.search_box_mixin';

import {
    DataStructure,
    SingleOrMultiple,
    ScrollDirection,
} from '../common';

import dxScrollable from './scroll_view/ui.scrollable';

interface ItemInfo<TKey = any> {
    readonly itemData?: Item;
    readonly itemElement?: DxElement;
    readonly itemIndex?: number;
    readonly node?: Node<TKey>;
}

export {
    DataStructure,
    SingleOrMultiple,
    ScrollDirection,
};

/** @public */
export type TreeViewCheckBoxMode = 'none' | 'normal' | 'selectAll';
/** @public */
export type TreeViewExpandEvent = 'dblclick' | 'click';

/** @public */
export type ContentReadyEvent<TKey = any> = EventInfo<dxTreeView<TKey>>;

/** @public */
export type DisposingEvent<TKey = any> = EventInfo<dxTreeView<TKey>>;

/** @public */
export type InitializedEvent<TKey = any> = InitializedEventInfo<dxTreeView<TKey>>;

/** @public */
export type ItemClickEvent<TKey = any> = NativeEventInfo<dxTreeView<TKey>, KeyboardEvent | MouseEvent | PointerEvent> & ItemInfo<TKey>;

/** @public */
export type ItemCollapsedEvent<TKey = any> = NativeEventInfo<dxTreeView<TKey>, MouseEvent | PointerEvent> & ItemInfo<TKey>;

/** @public */
export type ItemContextMenuEvent<TKey = any> = NativeEventInfo<dxTreeView<TKey>, MouseEvent | PointerEvent | TouchEvent> & ItemInfo<TKey>;

/** @public */
export type ItemExpandedEvent<TKey = any> = NativeEventInfo<dxTreeView<TKey>, MouseEvent | PointerEvent> & ItemInfo<TKey>;

/** @public */
export type ItemHoldEvent<TKey = any> = NativeEventInfo<dxTreeView<TKey>, MouseEvent | PointerEvent | TouchEvent> & ItemInfo<TKey>;

/** @public */
export type ItemRenderedEvent<TKey = any> = EventInfo<dxTreeView<TKey>> & ItemInfo<TKey>;

/** @public */
export type ItemSelectionChangedEvent<TKey = any> = EventInfo<dxTreeView<TKey>> & ItemInfo<TKey>;

/** @public */
export type OptionChangedEvent<TKey = any> = EventInfo<dxTreeView<TKey>> & ChangedOptionInfo;

/** @public */
export type SelectAllValueChangedEvent<TKey = any> = EventInfo<dxTreeView<TKey>> & {
    readonly value?: boolean | undefined;
};

/** @public */
export type SelectionChangedEvent<TKey = any> = EventInfo<dxTreeView<TKey>>;

/**
 * @deprecated use Properties instead
 * @namespace DevExpress.ui
 * @public
 */
export interface dxTreeViewOptions<TKey = any>
    extends Omit<HierarchicalCollectionWidgetOptions<dxTreeView<TKey>, dxTreeViewItem, TKey>, 'dataSource'>, SearchBoxMixinOptions {
    /**
     * @docid
     * @default true
     * @public
     */
    animationEnabled?: boolean;
    /**
     * @docid
     * @type_function_param1 parentNode:dxTreeViewNode
     * @type_function_return Promise<any>|Array<Object>
     * @public
     */
    createChildren?: ((parentNode: Node<TKey>) => PromiseLike<any> | Array<any>);
    /**
     * @docid
     * @type string | Array<dxTreeViewItem> | Store | DataSource | DataSourceOptions | null
     * @default null
     * @public
     */
    dataSource?: DataSourceLike<Item, TKey> | null;
    /**
     * @docid
     * @default 'tree'
     * @public
     */
    dataStructure?: DataStructure;
    /**
     * @docid
     * @default false
     * @public
     */
    expandAllEnabled?: boolean;
    /**
     * @docid
     * @default "dblclick"
     * @public
     */
    expandEvent?: TreeViewExpandEvent;
    /**
     * @docid
     * @default true
     * @public
     */
    expandNodesRecursive?: boolean;
    /**
     * @docid
     * @default 'expanded'
     * @hidden false
     * @public
     */
    expandedExpr?: string | Function;
    /**
     * @docid
     * @default 'hasItems'
     * @public
     */
    hasItemsExpr?: string | Function;
    /**
     * @docid
     * @type Array<dxTreeViewItem>
     * @public
     */
    items?: Array<Item>;
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field component:dxTreeView
     * @type_function_param1_field event:event
     * @type_function_param1_field itemData:object
     * @type_function_param1_field node:dxTreeViewNode

     * @action
     * @public
     */
    onItemClick?: ((e: ItemClickEvent<TKey>) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field component:dxTreeView
     * @type_function_param1_field event:event
     * @type_function_param1_field itemData:object
     * @type_function_param1_field node:dxTreeViewNode
     * @action
     * @public
     */
    onItemCollapsed?: ((e: ItemCollapsedEvent<TKey>) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field event:event
     * @type_function_param1_field itemData:object
     * @type_function_param1_field node:dxTreeViewNode
     * @type_function_param1_field component:dxTreeView
     * @action
     * @public
     */
    onItemContextMenu?: ((e: ItemContextMenuEvent<TKey>) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field component:dxTreeView
     * @type_function_param1_field event:event
     * @type_function_param1_field itemData:object
     * @type_function_param1_field node:dxTreeViewNode
     * @action
     * @public
     */
    onItemExpanded?: ((e: ItemExpandedEvent<TKey>) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field component:dxTreeView
     * @type_function_param1_field event:event
     * @type_function_param1_field itemData:object
     * @type_function_param1_field node:dxTreeViewNode
     * @action
     * @public
     */
    onItemHold?: ((e: ItemHoldEvent<TKey>) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field itemData:object
     * @type_function_param1_field node:dxTreeViewNode
     * @type_function_param1_field component:dxTreeView
     * @action
     * @public
     */
    onItemRendered?: ((e: ItemRenderedEvent<TKey>) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field node:dxTreeViewNode
     * @type_function_param1_field component:dxTreeView
     * @type_function_param1_field itemData:object
     * @action
     * @public
     */
    onItemSelectionChanged?: ((e: ItemSelectionChangedEvent<TKey>) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field component:dxTreeView
     * @action
     * @public
     */
    onSelectAllValueChanged?: ((e: SelectAllValueChangedEvent<TKey>) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field component:dxTreeView
     * @action
     * @public
     * @override
     */
    onSelectionChanged?: ((e: SelectionChangedEvent<TKey>) => void);
    /**
     * @docid
     * @default 'parentId'
     * @hidden false
     * @public
     */
    parentIdExpr?: string | Function;
    /**
     * @docid
     * @default 0
     * @public
     */
    rootValue?: any;
    /**
     * @docid
     * @default "vertical"
     * @public
     */
    scrollDirection?: ScrollDirection;
    /**
     * @docid
     * @default "Select All"
     * @public
     */
    selectAllText?: string;
    /**
     * @docid
     * @default false
     * @public
     */
    selectByClick?: boolean;
    /**
     * @docid
     * @default true
     * @public
     */
    selectNodesRecursive?: boolean;
    /**
     * @docid
     * @default "multiple"
     * @public
     */
    selectionMode?: SingleOrMultiple;
    /**
     * @docid
     * @default 'none'
     * @public
     */
    showCheckBoxesMode?: TreeViewCheckBoxMode;
    /**
     * @docid
     * @default null
     * @public
     */
    collapseIcon?: string | null;
    /**
     * @docid
     * @default null
     * @public
     */
    expandIcon?: string | null;
    /**
     * @docid
     * @default false
     * @public
     */
    virtualModeEnabled?: boolean;
    /**
     * @docid
     * @default true
     * @default false &for(desktop except Mac)
     * @public
     */
    useNativeScrolling?: boolean;
}
/**
 * @docid
 * @inherits HierarchicalCollectionWidget, SearchBoxMixin
 * @namespace DevExpress.ui
 * @public
 */
export default class dxTreeView<TKey = any>
    extends HierarchicalCollectionWidget<dxTreeViewOptions<TKey>, dxTreeViewItem, TKey> {
    /**
     * @docid
     * @publicName collapseAll()
     * @public
     */
    collapseAll(): void;
    /**
     * @docid
     * @publicName collapseItem(itemData)
     * @param1 itemData:dxTreeViewItem
     * @param1_field items:Array<dxTreeViewItem>
     * @return Promise<void>
     * @public
     */
    collapseItem(itemData: Item): DxPromise<void>;
    /**
     * @docid
     * @publicName collapseItem(itemElement)
     * @return Promise<void>
     * @public
     */
    collapseItem(itemElement: Element): DxPromise<void>;
    /**
     * @docid
     * @publicName collapseItem(key)
     * @return Promise<void>
     * @public
     */
    collapseItem(key: TKey): DxPromise<void>;
    /**
     * @docid
     * @publicName expandAll()
     * @public
     */
    expandAll(): void;
    /**
     * @docid
     * @publicName expandItem(itemData)
     * @param1 itemData:dxTreeViewItem
     * @param1_field items:Array<dxTreeViewItem>
     * @return Promise<void>
     * @public
     */
    expandItem(itemData: Item): DxPromise<void>;
    /**
     * @docid
     * @publicName expandItem(itemElement)
     * @return Promise<void>
     * @public
     */
    expandItem(itemElement: Element): DxPromise<void>;
    /**
     * @docid
     * @publicName expandItem(key)
     * @return Promise<void>
     * @public
     */
    expandItem(key: TKey): DxPromise<void>;
    /**
     * @docid
     * @publicName getNodes()
     * @public
     * @return Array<dxTreeViewNode>
     */
    getNodes(): Array<Node<TKey>>;
    /**
     * @docid
     * @publicName getSelectedNodes()
     * @public
     * @return Array<dxTreeViewNode>
     */
    getSelectedNodes(): Array<Node<TKey>>;
    /**
     * @docid
     * @publicName getSelectedNodeKeys()
     * @public
     */
    getSelectedNodeKeys(): Array<TKey>;
    /**
     * @docid
     * @publicName selectAll()
     * @public
     */
    selectAll(): void;
    /**
     * @docid
     * @publicName getScrollable()
     * @public
     * @return dxScrollable
     */
    getScrollable(): Scrollable;
    /**
     * @docid
     * @publicName selectItem(itemData)
     * @param1 itemData:dxTreeViewItem
     * @param1_field items:Array<dxTreeViewItem>
     * @public
     */
    selectItem(itemData: Item): boolean;
    /**
     * @docid
     * @publicName selectItem(itemElement)
     * @public
     */
    selectItem(itemElement: Element): boolean;
    /**
     * @docid
     * @publicName selectItem(key)
     * @public
     */
    selectItem(key: TKey): boolean;
    /**
     * @docid
     * @publicName unselectAll()
     * @public
     */
    unselectAll(): void;
    /**
     * @docid
     * @publicName unselectItem(itemData)
     * @param1 itemData:dxTreeViewItem
     * @param1_field items:Array<dxTreeViewItem>
     * @public
     */
    unselectItem(itemData: Item): boolean;
    /**
     * @docid
     * @publicName unselectItem(itemElement)
     * @public
     */
    unselectItem(itemElement: Element): boolean;
    /**
     * @docid
     * @publicName unselectItem(key)
     * @public
     */
    unselectItem(key: TKey): boolean;
    /**
     * @docid
     * @publicName updateDimensions()
     * @return Promise<void>
     * @public
     */
    updateDimensions(): DxPromise<void>;
    /**
     * @docid
     * @publicName scrollToItem(itemData)
     * @param1 itemData:dxTreeViewItem
     * @param1_field items:Array<dxTreeViewItem>
     * @return Promise<void>
     * @public
     */
    scrollToItem(itemData: Item): DxPromise<void>;
    /**
     * @docid
     * @publicName scrollToItem(itemElement)
     * @return Promise<void>
     * @public
     */
    scrollToItem(itemElement: Element): DxPromise<void>;
    /**
     * @docid
     * @publicName scrollToItem(key)
     * @return Promise<void>
     * @public
     */
    scrollToItem(key: TKey): DxPromise<void>;
}

/**
 * @public
 * @namespace DevExpress.ui.dxTreeView
 */
export type Item = dxTreeViewItem;

/**
 * @deprecated Use Item instead
 * @namespace DevExpress.ui
 */
export interface dxTreeViewItem extends CollectionWidgetItem {
    /**
     * @docid
     * @default false
     * @public
     */
    expanded?: boolean;
    /**
     * @docid
     * @default undefined
     * @public
     */
    hasItems?: boolean;
    /**
     * @docid
     * @public
     */
    icon?: string;
    /**
     * @docid
     * @public
     */
    items?: Array<dxTreeViewItem>;
    /**
     * @docid
     * @default undefined
     * @public
     */
    id?: number | string;
    /**
     * @docid
     * @default undefined
     * @public
     */
    parentId?: number | string;
    /**
     * @docid
     * @default false
     * @public
     */
    selected?: boolean;

    [key: string]: any;
}

/**
 * @public
 * @docid dxTreeViewNode
 * @type object
 */
export type Node<TKey = any> = dxTreeViewNode<TKey>;

/**
 * @docid
 * @deprecated {ui/tree_view.Node}
 * @type object
 * @namespace DevExpress.ui
 */
export interface dxTreeViewNode<TKey = any> {
    /**
     * @docid
     * @public
     * @type Array<dxTreeViewNode>;
     */
    children?: Array<dxTreeViewNode<TKey>>;
    /**
     * @docid
     * @public
     */
    disabled?: boolean;
    /**
     * @docid
     * @public
     */
    expanded?: boolean;
    /**
     * @docid
     * @public
     * @type dxTreeViewItem
     */
    itemData?: Item;
    /**
     * @docid
     * @public
     */
    key?: TKey;
    /**
     * @docid
     * @public
     * @type dxTreeViewNode
     */
    parent?: dxTreeViewNode<TKey>;
    /**
     * @docid
     * @public
     */
    selected?: boolean;
    /**
     * @docid
     * @public
     */
    text?: string;
}

/** @public */
export type Scrollable = Omit<dxScrollable, '_templateManager' | '_cancelOptionChange' | '_getTemplate' | '_invalidate' | '_refresh' | '_notifyOptionChanged' | '_createElement'>;

/** @public */
export type ExplicitTypes<TKey = any> = {
    Properties: Properties<TKey>;
    Node: Node<TKey>;
    ContentReadyEvent: ContentReadyEvent<TKey>;
    DisposingEvent: DisposingEvent<TKey>;
    InitializedEvent: InitializedEvent<TKey>;
    ItemClickEvent: ItemClickEvent<TKey>;
    ItemCollapsedEvent: ItemCollapsedEvent<TKey>;
    ItemContextMenuEvent: ItemContextMenuEvent<TKey>;
    ItemExpandedEvent: ItemExpandedEvent<TKey>;
    ItemHoldEvent: ItemHoldEvent<TKey>;
    ItemRenderedEvent: ItemRenderedEvent<TKey>;
    ItemSelectionChangedEvent: ItemSelectionChangedEvent<TKey>;
    OptionChangedEvent: OptionChangedEvent<TKey>;
    SelectAllValueChangedEvent: SelectAllValueChangedEvent<TKey>;
    SelectionChangedEvent: SelectionChangedEvent<TKey>;
};

/** @public */
export type Properties<TKey = any> = dxTreeViewOptions<TKey>;

/** @deprecated use Properties instead */
export type Options<TKey = any> = Properties<TKey>;

type EventProps<T> = Extract<keyof T, `on${any}`>;
type CheckedEvents<TProps, TEvents extends { [K in EventProps<TProps>]: (e: any) => void } & Record<Exclude<keyof TEvents, keyof TProps>, never>> = TEvents;

type FilterOutHidden<T> = Omit<T, 'onFocusIn' | 'onFocusOut' | 'onItemDeleted' | 'onItemDeleting' | 'onItemReordered'>;

type Events = CheckedEvents<FilterOutHidden<Properties>, Required<{
/**
 * @skip
 * @docid dxTreeViewOptions.onContentReady
 * @type_function_param1 e:{ui/tree_view:ContentReadyEvent}
 */
onContentReady?: ((e: ContentReadyEvent) => void);
/**
 * @skip
 * @docid dxTreeViewOptions.onDisposing
 * @type_function_param1 e:{ui/tree_view:DisposingEvent}
 */
onDisposing?: ((e: DisposingEvent) => void);
/**
 * @skip
 * @docid dxTreeViewOptions.onInitialized
 * @type_function_param1 e:{ui/tree_view:InitializedEvent}
 */
onInitialized?: ((e: InitializedEvent) => void);
/**
 * @skip
 * @docid dxTreeViewOptions.onItemClick
 * @type_function_param1 e:{ui/tree_view:ItemClickEvent}
 */
onItemClick?: ((e: ItemClickEvent) => void);
/**
 * @skip
 * @docid dxTreeViewOptions.onItemCollapsed
 * @type_function_param1 e:{ui/tree_view:ItemCollapsedEvent}
 */
onItemCollapsed?: ((e: ItemCollapsedEvent) => void);
/**
 * @skip
 * @docid dxTreeViewOptions.onItemContextMenu
 * @type_function_param1 e:{ui/tree_view:ItemContextMenuEvent}
 */
onItemContextMenu?: ((e: ItemContextMenuEvent) => void);
/**
 * @skip
 * @docid dxTreeViewOptions.onItemExpanded
 * @type_function_param1 e:{ui/tree_view:ItemExpandedEvent}
 */
onItemExpanded?: ((e: ItemExpandedEvent) => void);
/**
 * @skip
 * @docid dxTreeViewOptions.onItemHold
 * @type_function_param1 e:{ui/tree_view:ItemHoldEvent}
 */
onItemHold?: ((e: ItemHoldEvent) => void);
/**
 * @skip
 * @docid dxTreeViewOptions.onItemRendered
 * @type_function_param1 e:{ui/tree_view:ItemRenderedEvent}
 */
onItemRendered?: ((e: ItemRenderedEvent) => void);
/**
 * @skip
 * @docid dxTreeViewOptions.onItemSelectionChanged
 * @type_function_param1 e:{ui/tree_view:ItemSelectionChangedEvent}
 */
onItemSelectionChanged?: ((e: ItemSelectionChangedEvent) => void);
/**
 * @skip
 * @docid dxTreeViewOptions.onOptionChanged
 * @type_function_param1 e:{ui/tree_view:OptionChangedEvent}
 */
onOptionChanged?: ((e: OptionChangedEvent) => void);
/**
 * @skip
 * @docid dxTreeViewOptions.onSelectAllValueChanged
 * @type_function_param1 e:{ui/tree_view:SelectAllValueChangedEvent}
 */
onSelectAllValueChanged?: ((e: SelectAllValueChangedEvent) => void);
/**
 * @skip
 * @docid dxTreeViewOptions.onSelectionChanged
 * @type_function_param1 e:{ui/tree_view:SelectionChangedEvent}
 */
onSelectionChanged?: ((e: SelectionChangedEvent) => void);
}>>;
