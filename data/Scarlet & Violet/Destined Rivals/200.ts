import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [198],
	set: Set,

	name: {
		en: "Team Rocket's Murkrow",
		fr: "Cornèbre de la Team Rocket",
		de: "Team Rockets Kramurx",
		it: "Murkrow del Team Rocket",
		es: "Murkrow del Team Rocket",
		pt: "Murkrow da Equipe Rocket",
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
			en: "Deceit",
			fr: "Tromperie",
			de: "Tücke",
			it: "Sotterfugio",
			es: "Engaño",
			pt: "Traição",
			'es-mx': "Engaño"
		},

		effect: {
			en: "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Supporter, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por uma carta de Apoiador no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Partidario, muéstrala y ponla en tu mano. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Torment",
			fr: "Tourmente",
			de: "Folterknecht",
			it: "Attaccalite",
			es: "Tormento",
			pt: "Atormentar",
			'es-mx': "Tormento"
		},

		effect: {
			en: "Choose 1 of your opponent's Active Pokémon's attacks. During your opponent's next turn, that Pokémon can't use that attack.",
			fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas utiliser cette attaque.",
			de: "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Während des nächsten Zuges deines Gegners kann jenes Pokémon jene Attacke nicht einsetzen.",
			it: "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
			es: "Elige uno de los ataques del Pokémon Activo de tu rival. Durante el próximo turno de tu rival, dicho Pokémon no puede usar ese ataque.",
			pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Durante o próximo turno do seu oponente, aquele Pokémon não poderá usar aquele ataque.",
			'es-mx': "Elige 1 de los ataques del Pokémon Activo de tu rival. Durante el próximo turno de tu rival, dicho Pokémon no puede usar ese ataque."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'holo'
		},
	],

	thirdParty: {
		cardmarket: 826074
	}
}

export default card
