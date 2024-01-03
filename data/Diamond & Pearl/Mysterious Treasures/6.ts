import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong",
		de: "Bronzong"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Bronzor",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Miracle Oracle",
				fr: "Oracle miraculeux",
				de: "Wunderorakel"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card. Then, discard a card from your hand. If you discard an Energy card, draw 1 more card. This power can't be used if Bronzong is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez piocher une carte. Ensuite, défaussez une carte de votre main. Si vous défaussez une carte Énergie, piochez une carte supplémentaire. Ce pouvoir ne peut pas être utilisé si Archéodong est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Karte ziehen. Danach lege 1 Karte von deiner Hand auf deinen Ablagestapel. Wenn du auf diese Weise 1 Energiekarte auf den Ablagestapel gelegt hast, ziehe 1 weitere Karte. Diese Poké-Power kann nicht benutzt werden, wenn Bronzong von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Shady Stamp",
				fr: "Coup louche",
				de: "Zwielichtstampfer"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	description: {
		fr: "La découverte d'un de ces Pokémon sur un site de fouilles après 2 000 ans de sommeil a fait sensation."
	}
}

export default card
