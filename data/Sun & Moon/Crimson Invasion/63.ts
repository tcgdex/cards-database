import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Guzzlord-GX",
		fr: "Engloutyran-GX",
		es: "Guzzlord-GX",
		it: "Guzzlord-GX",
		pt: "Guzzlord-GX",
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
				es: "Comer Descuidadamente",
				it: "Sbrodolone",
				pt: "Comer Descuidado",
				de: "Kleckerkost"
			},
			effect: {
				en: "Discard the top 5 cards of your deck. If any of those cards are Energy cards, attach them to this Pokémon.",
				fr: "Défaussez les 5 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie, attachez-les à ce Pokémon.",
				es: "Descarta las 5 primeras cartas de tu baraja. Si entre esas cartas hay cartas de Energía, únelas a este Pokémon.",
				it: "Scarta le prime cinque carte del tuo mazzo. Se fra queste ci sono delle carte Energia, assegnale a questo Pokémon.",
				pt: "Descarte as 5 primeiras cartas do seu baralho. Se houver cartas de Energia entre elas, ligue-as a este Pokémon.",
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
				es: "Agujero Tiránico",
				it: "Voragine Tirannica",
				pt: "Buraco de Tirano",
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
				en: "Glutton GX",
				fr: "Gourmandise GX",
				es: "Voracidad GX",
				it: "Voracitas-GX",
				pt: "Voracidade GX",
				de: "Vielfraß GX"
			},
			effect: {
				en: "If your opponent’s Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards. (You can’t use more than 1 GX attack in a game.)",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez 2 cartes Récompense supplémentaires. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Si el Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, coge 2 cartas de Premio más. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, prendi due carte Premio in più. Non puoi usare più di un attacco GX a partita.",
				pt: "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, pegue 2 cartas de Prêmio a mais (você não pode usar mais de 1 ataque GX por partida).",
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
