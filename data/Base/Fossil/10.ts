import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
		it: "Lapras",
		de: "Lapras"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				it: "Pistolacqua",
				de: "Aquaknarre"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Lapras but not used to pay for this attack's Energy cost. You can't add more than 20 damage this way.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Lokhlass en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				it: "Infligge 10 danni più altri 10 danni per ogni carta Energia {W} assegnata a Lapras che non viene usata per pagare il costo di energia di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
				de: "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf Lapras abgelegte {W}-Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich nicht mehr als 20 Schadenspunkte auf diese Art und Weise hinzufügen."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				it: "Stordiraggio",
				de: "Konfusstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Confuso.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt verwirrt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "A Pokémon that has been overhunted almost to extinction. It can ferry people across water.",
		fr: "Ce Pokémon en voie d'extinction peut transporter des passagers sur son dos par-delà les océans.",
		it: "Questo Pokémon è stato cacciato fino quasi all'estinzione. Può trasportare le persone sull'acqua.",
		de: "Ein Pokémon, das von Jägern fast ausgerottet wurde. Es kann Menschen übers Wasser transportieren."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 273871,
				tcgplayer: 44419
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273871,
				tcgplayer: 44419
			}
		},
	],
}

export default card
