import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Slowking",
		fr: "Roigada",
		de: "Laschoking"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Prize Shift",
				fr: "Échange de Récompense",
				de: "Preis-Verschiebung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose a card from your hand and put it as a Prize card face up. If you do, choose 1 of your face-down Prize cards without looking and put it into your hand. This power can't be used if Slowking is affected by a Special Condition or if all of your Prize cards are face up.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir une carte de votre main et la placer comme carte Récompense face retournée. Choisissez alors sans regarder une des cartes Récompense face cachée et placez-la dans votre main. Ce pouvoir ne peut pas être utilisé si Roigada est affecté par un État Spécial ou si toutes vos cartes Récompense sont retournées.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Karte von deiner Hand auswählen und sie offen als Preis spielen. Wenn du das machst, wähle einen deiner verdeckten Preise, ohne ihn vorher anzusehen, und nimm ihn auf die Hand. Diese Poké-Power kann nicht benutzt werden, wenn Laschoking von einem Speziellen Zustand betroffen ist oder wenn alle deine Preise bereits offen liegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Option",
				fr: "Option psychique",
				de: "Psycho-Option"
			},
			effect: {
				en: "If Slowking has a Water Energy card attached to it, this attack does 20 damage plus 20 more damage. If Slowking has a Psychic Energy card attached to it, discard a Special Energy card attached to the Defending Pokémon, if any.",
				fr: "Si Roigada possède une carte Énergie , cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires. Si Roigada possède une carte Énergie , défaussez une carte Énergie spéciale attachée au Pokémon Défenseur, s'il en a.",
				de: "Wenn an Laschoking eine -Energiekarte angelegt ist, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu. Wenn an Laschoking eine -Energiekarte angelegt ist, lege eine an dem Verteidigenden Pokémon angelegte Spezialenergiekarte auf den Ablagestapel."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276791,
		tcgplayer: 89315
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

