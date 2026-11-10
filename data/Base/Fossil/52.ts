import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Omanyte",
		fr: "Amonita",
		it: "Omanyte",
		de: "Amonitas"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		138,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Clairvoyance",
				fr: "Clairvoyance",
				it: "Chiaroveggenza",
				de: "Hellseherei"
			},
			effect: {
				en: "Your opponent plays with his or her hand face up. This power stops working while Omanyte is Asleep, Confused, or Paralyzed.",
				fr: "Votre adversaire joue avec sa main révélée. Ce pouvoir cesse de fonctionner lorsqu'Amonita est Endormi, Confus ou Paralysé.",
				it: "Il tuo avversario gioca a carte scoperte. Questo potere non funziona quando Omanyte è Addormentato, Confuso o Paralizzato.",
				de: "Dein Gegner spielt mit einer offenen Hand. Diese Fähigkeit verliert ihre Wirkung, solange Amonitas schläft, verwirrt oder gelähmt ist."
			},
		},
	],

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
				en: "Does 10 damage plus 10 more damage for each Energy attached to Omanyte but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Amonita en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				it: "Infligge 10 danni più altri 10 danni per ogni carta Energia {W} assegnata a Omanyte che non viene usata per pagare il costo di energia di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
				de: "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf Amonitas abgelegte {W}-Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich nicht mehr als 20 Schadenspunkte auf diese Art und Weise hinzufügen."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Although long extinct, in rare cases, it can be genetically resurrected from fossils.",
		fr: "Disparu depuis longtemps, il peut être réanimé génétiquement à partir d'anciens fossiles.",
		it: "Sebbene sia estinto da molto tempo, in casi rari può essere clonato dai fossili.",
		de: "Obwohl es schon ewig ausgestorben ist, kann es in seltenen Fällen genetisch aus Fossilien wiederbelebt werden."
	},


	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
			thirdParty: {
				cardmarket: 273913,
				tcgplayer: 44454
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273913,
				tcgplayer: 44454
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273913,
				tcgplayer: 44454
			}
		},
	],
}

export default card
