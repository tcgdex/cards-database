import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [702],
	set: Set,

	name: {
		'en-us': "Dedenne",
		'fr-fr': "Dedenne",
		'es-es': "Dedenne",
		'it-it': "Dedenne",
		'pt-br': "Dedenne",
		'de-de': "Dedenne"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tail Smack",
			'fr-fr': "Coup de Queue",
			'es-es': "Bofetón Cola",
			'it-it': "Codasberla",
			'pt-br': "Ataque de Cauda",
			'de-de': "Schweifschlag"
		},

		damage: 10
	}, {
		cost: ["Lightning"],

		name: {
			'en-us': "Dede-Short",
			'fr-fr': "Dede-Court-Circuit",
			'es-es': "Dede-Cortocircuito",
			'it-it': "Cortocircuito Dede",
			'pt-br': "Dedecurto",
			'de-de': "Dede-Kurzschluss"
		},

		effect: {
			'en-us': "You can use this attack only if 1 of your Togedemaru used Toge Dash during your last turn. Your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Vous ne pouvez utiliser cette attaque que si l'un de vos Togedemaru a utilisé Toge Ruée pendant votre dernier tour. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Puedes usar este ataque solo si 1 de tus Togedemaru usó Toge Carrera durante tu último turno. El Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Puoi usare questo attacco solo se uno dei tuoi Togedemaru ha usato Togescatto durante il tuo ultimo turno. Il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Você só pode usar este ataque se 1 dos seus Togedemaru usou Arremetoge durante o seu último turno. O Pokémon Ativo do seu oponente agora está Paralisado.",
			'de-de': "Du kannst diese Attacke nur einsetzen, wenn 1 deiner Togedemaru während deines letzten Zuges Toge-Spurt eingesetzt hat. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "A Dedenne's whiskers pick up electrical waves other Dedenne send out. These Pokémon share locations of food or electricity with one another.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682132,
				tcgplayer: 451739
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682132,
				tcgplayer: 451739
			}
		},
	],
}

export default card
