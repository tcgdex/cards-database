import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Omastar",
		fr: "Amonistar",
		it: "Omastar",
		de: "Amoroso"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		139,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Omanyte",
		fr: "Amonita",
		it: "Omanyte",
		de: "Amonitas"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				it: "Pistolacqua",
				de: "Aquaknarre"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Amonistar en plus du coût d'Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				it: "Infligge 20 danni più altri 10 danni per ogni carta Energia {W} assegnata a Omastar che non viene usata per pagare il costo di energia di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
				de: "Fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf Amoroso abgelegte {W}-Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich nicht mehr als 20 Schadenspunkte auf diese Art und Weise hinzufügen."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Spike Cannon",
				fr: "Picanon",
				it: "Sparalance",
				de: "Dornkanone"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				it: "Lancia 2 volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt jedesmal, wenn die Münze „Kopf“ zeigt, 30 Schadenspunkte zu."
			},
			damage: "30x",

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
		en: "A prehistoric Pokémon that died out when its heavy shell made it impossible for it to catch prey.",
		fr: "Un Pokémon préhistorique qui disparut quand sa coquille devint trop lourde à déplacer.",
		it: "Pokémon preistorico estintosi quando il peso della sua conchiglia gli ha reso impossibile catturare prede con cui sfamarsi.",
		de: "Ein Pokémon aus der Urzeit, das ausgestorben ist, da sein zu schwerer Panzer es unmöglich machte, Beute zu jagen."
	},


	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
			thirdParty: {
				cardmarket: 273901,
				tcgplayer: 44442
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273901,
				tcgplayer: 44442
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273901,
				tcgplayer: 44442
			}
		},
	],
}

export default card
