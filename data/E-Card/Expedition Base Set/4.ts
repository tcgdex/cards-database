import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Blastoise",
		fr: "Tortank",
		de: "Turtok"
	},

	illustrator: "Kimiya Masago",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [9],

	hp: 100,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
		de: "Schillok"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Jet Stream",
				fr: "Force courant",
				de: "Düsenstrahl"
			},
			effect: {
				en: "Once during your turn (before your attack), if Blastoise is your Active Pokémon, you may flip a coin. If heads, discard an Energy card attached to Blastoise, if any. Then, if there are any Energy cards attached to the Defending Pokémon, choose 1 of them and discard it. This power can't be used if Blastoise is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Tortank est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, défaussez-vous d'une carte Énergie attachée à Tortank, s'il en possède une. Ensuite, s'il y a des cartes Énergie attachées au Pokémon Défenseur, choisissez-en une et obligez votre adversaire à s'en défausser. Ce pouvoir ne peut pas être utilisé si Tortank est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Turtok dein Aktives Pokémon ist, eine Münze werfen. Lege bei „Kopf“ eine an Turtok angelegte Energiekarte auf deinen Ablagestapel, falls vorhanden. Wenn dann mindestens eine Energiekarte an das Verteidigende Pokémon angelegt ist, wähle 1 davon und lege sie auf den Ablagestapel deines Gegners. Diese Fähigkeit kann nicht verwendet werden, falls Turtok von einem Speziellen Zustand betroffen ist."
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
				de: "Energiekanone"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Energy attached to Blastoise but not used to pay for this attack's Energy Cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Tortank en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Turtok angelegte Energie, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wird, zu. Du kannst auf diese Weise höchstens 20 weitere Schadenspunkte zufügen."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83888,
				cardmarket: 274879
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83888,
				cardmarket: 274879
			},
		},
	],
}

export default card
