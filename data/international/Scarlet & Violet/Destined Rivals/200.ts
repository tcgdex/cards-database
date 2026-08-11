import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [198],
	set: Set,

	name: {
		'en-us': "Team Rocket's Murkrow",
		'fr-fr': "Cornèbre de la Team Rocket",
		'de-de': "Team Rockets Kramurx",
		'it-it': "Murkrow del Team Rocket",
		'es-es': "Murkrow del Team Rocket",
		'pt-br': "Murkrow da Equipe Rocket",
		'es-mx': "Murkrow del Equipo Rocket"
	},


	illustrator: "Akira Komayama",

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Deceit",
			'fr-fr': "Tromperie",
			'de-de': "Tücke",
			'it-it': "Sotterfugio",
			'es-es': "Engaño",
			'pt-br': "Traição",
			'es-mx': "Engaño"
		},

		effect: {
			'en-us': "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Supporter, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por uma carta de Apoiador no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Partidario, muéstrala y ponla en tu mano. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Torment",
			'fr-fr': "Tourmente",
			'de-de': "Folterknecht",
			'it-it': "Attaccalite",
			'es-es': "Tormento",
			'pt-br': "Atormentar",
			'es-mx': "Tormento"
		},

		effect: {
			'en-us': "Choose 1 of your opponent's Active Pokémon's attacks. During your opponent's next turn, that Pokémon can't use that attack.",
			'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas utiliser cette attaque.",
			'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Während des nächsten Zuges deines Gegners kann jenes Pokémon jene Attacke nicht einsetzen.",
			'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
			'es-es': "Elige uno de los ataques del Pokémon Activo de tu rival. Durante el próximo turno de tu rival, dicho Pokémon no puede usar ese ataque.",
			'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Durante o próximo turno do seu oponente, aquele Pokémon não poderá usar aquele ataque.",
			'es-mx': "Elige 1 de los ataques del Pokémon Activo de tu rival. Durante el próximo turno de tu rival, dicho Pokémon no puede usar ese ataque."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826074,
				tcgplayer: 633000
			}
		},
	],
}

export default card
