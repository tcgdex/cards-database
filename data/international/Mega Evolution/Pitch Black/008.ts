import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Delphox ex",
		'fr-fr': "Méga-Goupelin-ex",
		'es-es': "Mega-Delphox ex",
		'es-mx': "Mega-Delphox ex",
		'de-de': "Mega-Fennexis-ex",
		'it-it': "Mega Delphox-ex",
		'pt-br': "Mega Delphox ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [655],
	hp: 350,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Braixen"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Trick Portal",
			'fr-fr': "Portail Passe-Passe",
			'es-es': "Portal Trucado",
			'es-mx': "Portal Mágico",
			'de-de': "Trickportal",
			'it-it': "Portaltrucco",
			'pt-br': "Teletransportal"
		},

		cost: ["Fire"],

		effect: {
			'en-us': "Look at the top 9 cards of your deck, and you may put any number of Pokémon you find there onto your Bench. Shuffle the other cards back into your deck.",
			'fr-fr': "Regardez les 9 cartes du dessus de votre deck. Vous pouvez placer sur votre Banc le nombre voulu de Pokémon que vous y trouvez. Mélangez les autres cartes avec votre deck.",
			'es-es': "Mira las 9 primeras cartas de tu baraja, y puedes poner cualquier cantidad de Pokémon que encuentres entre ellas en tu Banca. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			'es-mx': "Mira las primeras 9 cartas de tu mazo, y puedes poner cualquier cantidad de Pokémon que encuentres entre ellas en tu Banca. Baraja el resto de las cartas de nuevo en tu mazo.",
			'de-de': "Schau dir die obersten 9 Karten deines Decks an. Du kannst beliebig viele Pokémon, die du dort findest, auf deine Bank legen. Mische die anderen Karten zurück in dein Deck.",
			'it-it': "Guarda le prime nove carte del tuo mazzo e puoi mettere un numero qualsiasi di Pokémon presenti tra esse nella tua panchina. Rimischia le altre carte nel tuo mazzo.",
			'pt-br': "Olhe as 9 cartas de cima do seu baralho, e você pode colocar qualquer número de Pokémon que você encontrar lá no seu Banco. Embaralhe as outras cartas de volta no seu baralho."
		}
	}, {
		name: {
			'en-us': "Eerie Glow",
			'fr-fr': "Lueur Sinistre",
			'es-es': "Resplandor Sobrecogedor",
			'es-mx': "Resplandor Inquietante",
			'de-de': "Gruselglühen",
			'it-it': "Lucemistero",
			'pt-br': "Brilho Misterioso"
		},

		cost: ["Fire", "Colorless", "Colorless"],

		damage: 200,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned and Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Quemado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido y Quemado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato e confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Queimado."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895796,
				tcgplayer: 704765
			}
		},
	],
}

export default card
