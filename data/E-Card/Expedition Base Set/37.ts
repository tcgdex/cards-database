import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Blastoise",
		fr: "Tortank",
		de: "Turtok"
	},

	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		9,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Jet Stream",
				fr: "Force courant",
				de: "Jet Stream"
			},
			effect: {
				en: "Once during your turn (before you attack), if Blastoise is your Active Pokémon, you may flip a coin. If heads, discard an Energy card attached to Blastoise, if any. Then, if there are any Energy cards attached to the Defending Pokémon, choose one of them and discard it. This power can't be used if Blastoise is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Tortank est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, défaussez-vous d'une carte Énergie attachée à Tortank, s'il en possède une. Ensuite, s'il y a des cartes Énergie attachées au Pokémon Défenseur, choisissez-en une et obligez votre adversaire à s'en défausser. Ce pouvoir ne peut pas être utilisé si Tortank est affecté par un État spécial.",
				de: "Once during your turn (before you attack), if Blastoise is your Active Pokémon, you may flip a coin. If heads, discard an Energy card attached to Blastoise. Then, if there any Energy cards attached to the Defending Pokémon, choose 1 of them and discard it. This power can't be used if Blaistoise is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Energy Cannon",
				fr: "Canon à énergie",
				de: "Energy Cannon"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Tortank en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Does 40 damage plus 10 more damage for each Energy attached to Blastoise but not used to pay for this attack's energy cost. You can't add more then 20 damage in this way."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274879,
		tcgplayer: 83890
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
