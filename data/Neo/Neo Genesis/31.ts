import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Croconaw",
		fr: "Crocrodil",
		de: "Tyracroc"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		159,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Totodile",
		fr: "Kaiminus",
		de: "Karnimani"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Screech",
				fr: "Grincement",
				de: "Kreideschrei"
			},
			effect: {
				en: "Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon.",
				fr: "Jusqu'à la fin de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 20 dégâts supplémentaires au Pokémon Défenseur.",
				de: "Falls bis zum Ende deines nächsten Zugs ein Angriff dem verteidigenden Pokémon Schadenspunkte zufügt (nachdem Schwäche und Resistenz verrechnet wurden), fügt dieser Angriff dem verteidigenden Pokémon 20 weitere Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Jaw Clamp",
				fr: "Verrouillage de mâchoires",
				de: "Schnappkiefer"
			},
			effect: {
				en: "Until the end of your opponent's next turn, as long as Croconaw is your Active Pokémon, the Defending Pokémon can't retreat, and if the effect of an attack, Pokémon Power, or Trainer card would change that player's Active Pokémon, that part of the effect does nothing.",
				fr: "Jusqu'à la fin du prochain tour de votre adversaire, et tant que Crocrodil est votre Pokémon Actif, le Pokémon Défenseur ne peut pas battre en retraite, et si l'effet d'une attaque, Pouvoir Pokémon ou carte Dresseur vient à changer le Pokémon Actif de ce joueur, cette partie de l'effet ne fait rien.",
				de: "Das verteidigende Pokémon kann sich bis zum Ende des nächsten gegnerischen Zugs nicht zurückziehen, solange Tyracroc dein aktives Pokémon ist. Wenn die Auswirkungen eines Angriffs, einer Pokémon-Power oder einer Trainerkarte das aktive Pokémon dieses Spielers ändern würde, bleibt dieser Teil der Auswirkungen ohne Effekt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "If it loses a fang, a new one grows back in its place. There are always 48 fangs lining its mouth.",
		fr: "S'il perd un croc, un nouveau poussera pour le remplacer. Il y a toujours 48 crocs dans sa bouche.",
		de: "Falls ihm ein Giftzahn ausfällt, wächst ihm dort ein neuer nach. Es verfügt immer über 48 Giftzähne im Maul."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274431,
				tcgplayer: 84495
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274431,
				tcgplayer: 84495
			}
		}
	]
}

export default card
