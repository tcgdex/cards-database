import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Tropical Tidal Wave",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Trainer",

	set: Set,
	dexId: [
		25,183,54,187
	],

	effect: {
		en: "Flip a coin. If heads, discard all Trainer cards your opponent has in play. If tails, discard all Trainer cards (excluding Supporter cards) you have in play."
	},

	variants: [
		{
			type: "normal",
			stamp: ["worlds-2010"]
		},
		{
			type: "normal",
			stamp: ["worlds-2010","staff"]
		},
		{
			type: "normal",
			stamp: ["worlds-2010","finalist"]
		},
		{
			type: "normal",
			stamp: ["worlds-2010","quarter-finalist"]
		},
		{
			type: "normal",
			stamp: ["worlds-2010", "semi-finalist"]
		},
		{
			type: "normal",
			stamp: ["worlds-2010", "top-sixteen"]
		},
		{
			type: "normal",
			stamp: ["worlds-2010", "top-thirty-two"]
		},
	]



}

export default card
