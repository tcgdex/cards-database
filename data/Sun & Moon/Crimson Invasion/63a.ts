import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Guzzlord-GX",
		fr: "Engloutyran-GX",
		de: "Schlingking-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		799,
	],
	hp: 210,
	types: [
		"Darkness",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Eat Sloppily",
				fr: "Repas Baveux",
				de: "Kleckerkost"
			},
			effect: {
				en: "Discard the top 5 cards of your deck. If any of those cards are Energy cards, attach them to this Pokémon.",
				fr: "Défaussez les 5 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie, attachez-les à ce Pokémon.",
				de: "Lege die obersten 5 Karten von deinem Deck auf deinen Ablagestapel. Wenn unter jenen Karten Energiekarten sind, lege sie an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tyrannical Hole",
				fr: "Trou Tyrannique",
				de: "Despotischer Schlund"
			},

			damage: 180,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Glutton-GX",
				fr: "Gourmandise GX",
				de: "Vielfraß-GX"
			},
			effect: {
				en: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards. (You can't use more than 1 GX attack in a game.)",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez 2 cartes Récompense supplémentaires. (Vous ne pouvez utiliser qu'une attaque GX par partie.)",
				de: "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 2 Preiskarten mehr. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,





}

export default card
