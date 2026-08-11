import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Zeraora GX",
		'fr-fr': "Zeraora GX",
		'es-es': "Zeraora GX",
		'it-it': "Zeraora GX",
		'pt-br': "Zeraora GX",
		'de-de': "Zeraora GX"
	},

	illustrator: "PLANETA Otani",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		807,
	],

	hp: 190,

	types: [
		"Lightning",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Thunderclap Zone",
				'fr-fr': "Zone Vif Éclair",
				'es-es': "Zona Fulgor",
				'it-it': "Zona Fulmirapida",
				'pt-br': "Zona de Trovoada",
				'de-de': "Blitzsturmzone"
			},
			effect: {
				'en-us': "Each of your Pokémon that has any Lightning Energy attached to it has no Retreat Cost.",
				'fr-fr': "Aucun de vos Pokémon auxquels de l’Énergie Lightning est attachée n’a de Coût de Retraite.",
				'es-es': "Cada uno de tus Pokémon que tenga alguna Energía Lightning unida a él no tiene ningún Coste de Retirada.",
				'it-it': "I tuoi Pokémon in gioco che hanno delle Energie Lightning assegnate non hanno costo di ritirata.",
				'pt-br': "Cada um dos seus Pokémon que tiver alguma Energia Lightning ligada a ele não terá custo de Recuo.",
				'de-de': "Jedes deiner Pokémon, an das mindestens 1 Lightning-Energie angelegt ist, hat keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Plasma Fists",
				'fr-fr': "Plasma Punch",
				'es-es': "Puños Plasma",
				'it-it': "Pugni Plasma",
				'pt-br': "Punhos de Plasma",
				'de-de': "Plasmafäuste"
			},
			effect: {
				'en-us': "This Pokémon can’t attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 160,

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Full Voltage GX",
				'fr-fr': "Pleine Tension GX",
				'es-es': "Pleno Voltaje GX",
				'it-it': "Alta Tensione-GX",
				'pt-br': "Voltagem Máxima GX",
				'de-de': "Volle Voltzahl GX"
			},
			effect: {
				'en-us': "Attach 5 basic Energy cards from your discard pile to your Pokémon in any way you like. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Attachez 5 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Une 5 cartas de Energía Básica de tu pila de descartes a tus Pokémon de la manera que desees. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Assegna a piacimento ai tuoi Pokémon cinque carte Energia base dalla tua pila degli scarti. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Ligue 5 cartas de Energia básica da sua pilha de descarte aos seus Pokémon como desejar (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege 5 Basis-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365834,
		tcgplayer: 178896
	}
}

export default card
