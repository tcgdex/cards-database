import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Slaking",
		fr: "Monaflèmit",
		es: "Slaking",
		it: "Slaking",
		pt: "Slaking",
		de: "Letarking"
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
		en: "Vigoroth",
		fr: "Vigoroth",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Lazy",
				fr: "Fainéant",
				es: "Perezoso",
				it: "Fannullone",
				pt: "Preguiçoso",
				de: "Faulheit"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent’s Pokémon in play have no Abilities, except for Lazy.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les Pokémon en jeu de votre adversaire n’ont pas de talent, à l’exception de Fainéant.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, los Pokémon en juego de tu rival no tienen ninguna habilidad, excepto Perezoso.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, le abilità dei Pokémon in gioco del tuo avversario non hanno effetto, a eccezione di Fannullone.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, os Pokémon em jogo do seu oponente não têm Habilidades, exceto por Preguiçoso.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, haben die Pokémon deines Gegners im Spiel keine Fähigkeiten, außer Faulheit."
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
				en: "Critical Move",
				fr: "Mouvement Décisif",
				es: "Ataque Crítico",
				it: "Criticomossa",
				pt: "Movimento Crítico",
				de: "Entscheidung"
			},
			effect: {
				en: "Discard an Energy from this Pokémon. It can’t attack during your next turn.",
				fr: "Défaussez une Énergie de ce Pokémon. Il ne peut pas attaquer pendant votre prochain tour.",
				es: "Descarta 1 Energía de este Pokémon. No puede atacar durante tu próximo turno.",
				it: "Scarta un’Energia assegnata a questo Pokémon. Non può attaccare durante il tuo prossimo turno.",
				pt: "Descarte 1 Energia deste Pokémon. Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Es kann während deines nächsten Zuges nicht angreifen."
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



}

export default card
