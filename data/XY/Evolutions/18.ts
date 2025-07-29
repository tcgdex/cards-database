import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
		es: "Arcanine",
		it: "Arcanine",
		pt: "Arcanine",
		de: "Arkani"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Burning Road",
				fr: "Route Enflammée",
				es: "Camino Ardiente",
				it: "Scia Infuocata",
				pt: "Estrada Queimada",
				de: "Brennender Weg"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon was on the Bench and became your Active Pokémon this turn, you may move any number of Fire Energy attached to your Pokémon to this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif lors de ce tour, vous pouvez déplacer des Énergies Fire attachées à vos Pokémon vers ce Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon estaba en la Banca y se ha convertido en tu Pokémon Activo en este turno, puedes mover cualquier cantidad de Energía Fire unida a tus Pokémon a este Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon era in panchina ed è diventato il tuo Pokémon attivo in questo turno, puoi spostare un numero qualsiasi di Energie Fire assegnate ai tuoi Pokémon su questo Pokémon.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estava no Banco e tornou-se o seu Pokémon Ativo nesta vez de jogar, você poderá ligar qualquer número de Energia Fire ligada a seus Pokémon a este Pokémon.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn dieses Pokémon auf der Bank war und während dieses Zuges zu deinem Aktiven Pokémon wurde, beliebig viele Fire-Energien, die an deine Pokémon angelegt sind, auf dieses Pokémon verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Scorching Breath",
				fr: "Souffle Brûlant",
				es: "Aliento Ígneo",
				it: "Soffio Ustionante",
				pt: "Hálito Ardente",
				de: "Sengender Atem"
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Este Pokémon no puede atacar durante tu próximo turno.",
				it: "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "Este Pokémon não poderá atacar durante sua próxima vez de jogar.",
				de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 150,

		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 293374
	}
}

export default card
