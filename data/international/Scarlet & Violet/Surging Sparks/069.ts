import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [1008],
	set: Set,

	name: {
		'en-us': "Miraidon",
		'fr-fr': "Miraidon",
		'es-es': "Miraidon",
		'it-it': "Miraidon",
		'pt-br': "Miraidon",
		'de-de': "Miraidon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "C.O.D.E.: Protect",
			'fr-fr': "C.O.D.E. : Protection",
			'es-es': "C.Ó.D.I.G.O.: Protección",
			'it-it': "Protocollo di Protezione",
			'pt-br': "C.O.D.E.: Proteção",
			'de-de': "C.O.D.E.: Beschützen"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to each of your Future Pokémon by attacks from Pokémon ex. If this Pokémon is no longer your Active Pokémon, this effect ends.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à chacun de vos Pokémon Temps futur par les attaques de Pokémon-ex. Si ce Pokémon n'est plus votre Pokémon Actif, cet effet prend fin.",
			'es-es': "Durante el próximo turno de tu rival, se evita todo el daño infligido a cada uno de tus Pokémon del futuro por ataques de Pokémon ex. Si este Pokémon ya no es tu Pokémon Activo, este efecto termina.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a ciascuno dei tuoi Pokémon Tempo Futuro dagli attacchi dei Pokémon-ex. Se questo Pokémon non è più il tuo Pokémon attivo, questo effetto finisce.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a cada um dos seus Pokémon Futuristas por ataques de Pokémon ex. Se este Pokémon não for mais o seu Pokémon Ativo, este efeito terminará.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der jedem deiner Pokémon aus der Zukunft durch Attacken von Pokémon-ex zugefügt wird. Wenn dieses Pokémon nicht mehr dein Aktives Pokémon ist, wird dieser Effekt aufgehoben."
		},

		damage: 40
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Thunder Claws",
			'fr-fr': "Griffes Tonnerre",
			'es-es': "Garras Trueno",
			'it-it': "Artigli Tonanti",
			'pt-br': "Garras Trovejantes",
			'de-de': "Donnerkrallen"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794352,
				tcgplayer: 590008
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794352,
				tcgplayer: 590008
			}
		},
	],

	illustrator: "Nurikabe",
	
}

export default card
