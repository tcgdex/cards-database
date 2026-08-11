import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [53],
	set: Set,

	name: {
		'en-us': "Team Rocket's Persian ex",
		'fr-fr': "Persian-ex de la Team Rocket",
		'de-de': "Team Rockets Snobilikat-ex",
		'it-it': "Persian-ex del Team Rocket",
		'es-es': "Persian ex del Team Rocket",
		'pt-br': "Persian ex da Equipe Rocket",
		'es-mx': "Persian ex del Equipo Rocket"
	},


	suffix: "ex",
	illustrator: "5ban Graphics",

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Team Rocket's Meowth",
		'fr-fr': "Miaouss de la Team Rocket",
		'de-de': "Team Rockets Mauzi",
		'it-it': "Meowth del Team Rocket",
		'es-es': "Meowth del Team Rocket",
		'pt-br': "Meowth da Equipe Rocket",
		'es-mx': "Meowth del Equipo Rocket"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Haughty Order",
			'fr-fr': "Ordre Hautain",
			'de-de': "Anmaßender Befehl",
			'it-it': "Ordine Altezzoso",
			'es-es': "Orden Arrogante",
			'pt-br': "Ordem Arrogante",
			'es-mx': "Orden Soberbia"
		},

		effect: {
			'en-us': "Reveal the top 10 cards of your opponent's deck. You may choose an attack from a Pokémon you find there and use it as this attack. Shuffle the revealed cards into your opponent's deck.",
			'fr-fr': "Montrez les 10 cartes du dessus du deck de votre adversaire. Vous pouvez choisir une attaque d'un Pokémon que vous y trouvez et l'utiliser en tant que cette attaque. Mélangez les cartes montrées avec le deck de votre adversaire.",
			'de-de': "Decke die obersten 10 Karten des Decks deines Gegners auf. Du kannst 1 Attacke von 1 Pokémon, das du dort findest, wählen und sie als diese Attacke einsetzen. Mische die aufgedeckten Karten in das Deck deines Gegners.",
			'it-it': "Mostra le prime 10 carte del mazzo del tuo avversario. Puoi scegliere un attacco di un Pokémon presente tra esse e usarlo al posto di questo attacco. Rimischia le carte mostrate nel mazzo del tuo avversario.",
			'es-es': "Enseña las 10 primeras cartas de la baraja de tu rival. Puedes elegir un ataque de algún Pokémon que encuentres entre ellas y usarlo para este ataque. Pon las cartas que has enseñado en la baraja de tu rival y barájalas todas.",
			'pt-br': "Revele as 10 cartas de cima do baralho do seu oponente. Você pode escolher um ataque de um Pokémon que encontrar lá e usá-lo como este ataque. Embaralhe as cartas reveladas no baralho do seu oponente.",
			'es-mx': "Muestra las primeras 10 cartas del mazo de tu rival. Puedes elegir 1 ataque de algún Pokémon que encuentres entre ellas y usarlo como este ataque. Pon las cartas que mostraste en el mazo de tu rival y barájalas todas."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Cruel Slash",
			'fr-fr': "Tranche Cruelle",
			'de-de': "Grausamer Schlitzer",
			'it-it': "Lacerazione Crudele",
			'es-es': "Tajo Cruel",
			'pt-br': "Talho Cruel",
			'es-mx': "Cuchillada Cruel"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826024,
				tcgplayer: 632955
			}
		},
	],
}

export default card
