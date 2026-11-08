import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Slaking",
		'fr-fr': "Monaflèmit",
		'es-es': "Slaking",
		'it-it': "Slaking",
		'pt-br': "Slaking",
		'de-de': "Letarking"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		289,
	],

	hp: 160,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Lazy",
				'fr-fr': "Fainéant",
				'es-es': "Perezoso",
				'it-it': "Fannullone",
				'pt-br': "Preguiçoso",
				'de-de': "Faulheit"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent’s Pokémon in play have no Abilities, except for Lazy.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, les Pokémon en jeu de votre adversaire n’ont pas de talent, à l’exception de Fainéant.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, los Pokémon en juego de tu rival no tienen ninguna habilidad, excepto Perezoso.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, le abilità dei Pokémon in gioco del tuo avversario non hanno effetto, a eccezione di Fannullone.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, os Pokémon em jogo do seu oponente não têm Habilidades, exceto por Preguiçoso.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, haben die Pokémon deines Gegners im Spiel keine Fähigkeiten, außer Faulheit."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Critical Move",
				'fr-fr': "Mouvement Décisif",
				'es-es': "Ataque Crítico",
				'it-it': "Criticomossa",
				'pt-br': "Movimento Crítico",
				'de-de': "Entscheidung"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon. It can’t attack during your next turn.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon. Il ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Descarta 1 Energía de este Pokémon. No puede atacar durante tu próximo turno.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon. Non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Descarte 1 Energia deste Pokémon. Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Es kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It is the world's most slothful Pokémon. However, it can exert horrifying power by releasing pent-up energy all at once.",
	},

	thirdParty: {
		cardmarket: 361354,
		tcgplayer: 170944
	}
}

export default card
