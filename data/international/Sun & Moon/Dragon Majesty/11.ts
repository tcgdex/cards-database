import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Reshiram GX",
		'fr-fr': "Reshiram GX",
		'es-es': "Reshiram GX",
		'it-it': "Reshiram GX",
		'pt-br': "Reshiram GX",
		'de-de': "Reshiram GX"
	},

	illustrator: "PLANETA Otani",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		643,
	],

	hp: 180,

	types: [
		"Fire",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flame Charge",
				'fr-fr': "Nitrocharge",
				'es-es': "Nitrocarga",
				'it-it': "Nitrocarica",
				'pt-br': "Ataque de Chamas",
				'de-de': "Nitroladung"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Fire Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 2 cartes Énergie Fire dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas de Energía Fire y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due carte Energia Fire e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 cartas de Energia Fire no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Fire-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Scorching Column",
				'fr-fr': "Colonne Torride",
				'es-es': "Columna Abrasadora",
				'it-it': "Torre Ustionante",
				'pt-br': "Coluna Abrasadora",
				'de-de': "Versengende Säule"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 110,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Vermilion GX",
				'fr-fr': "Vermillon-GX",
				'es-es': "Bermellón-GX",
				'it-it': "Vermiglio-GX",
				'pt-br': "Vermelhão-GX",
				'de-de': "Zinnober-GX"
			},
			effect: {
				'en-us': "You may attach up to 5 Fire Energy cards from your hand to your Pokémon in any way you like. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Vous pouvez attacher jusqu’à 5 cartes Énergie Fire de votre main à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Puedes unir hasta 5 cartas de Energía Fire de tu mano a tus Pokémon de la manera que desees. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Puoi assegnare a piacimento ai tuoi Pokémon fino a cinque carte Energia Fire dalla tua mano. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Você pode ligar até 5 cartas de Energia Fire da sua mão aos seus Pokémon como desejar (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Du kannst bis zu 5 Fire-Energiekarten aus deiner Hand beliebig an deine Pokémon anlegen. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 363483,
		tcgplayer: 175347
	}
}

export default card
