import React from 'react';
import { Item } from './Item';

export function ItemList({ addItemToCart }) {
	const items = [
		{ id: 1, name: 'Cat S22 Flip (16GB) 2.8" Touchscreen, Android 11, IP68 Water Resistant, 4G LTE GSM (T-Mobile Unlocked for MetroPCS, Global) (Black)', price: 63.90 },
		{ id: 2, name: 'TracFone TCL Flip 2, 8GB, Black - Prepaid Flip Phone (Locked)', price: 19.99 },
		{ id: 3, name: 'TracFone Nokia 2760 Flip, 4GB, Black - Prepaid Feature Phone (Locked) (Renewed)', price: 14.99 },
		{ id: 4, name: 'Kyocera DuraXV Extreme E4810 Verizon Rugged LTE Flip Basic Cell Phone Camera GPS Black- (Renewed)', price: 199.99 },
	];

	return (
		<div className="item-list">
			{items.map((item) => (
				<Item key={item.id} item={item} addItemToCart={addItemToCart} />
			))}
		</div>
	);
}