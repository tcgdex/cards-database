import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [702],
	set: Set,

	name: {
		en: "Dedenne",
		fr: "Dedenne",
		es: "Dedenne",
		it: "Dedenne",
		pt: "Dedenne",
		de: "Dedenne"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Smack",
			fr: "Coup de Queue",
			es: "Bofetón Cola",
			it: "Codasberla",
			pt: "Ataque de Cauda",
			de: "Schweifschlag"
		},

		damage: 10
	}, {
		cost: ["Lightning"],

		name: {
			en: "Dede-Short",
			fr: "Dede-Court-Circuit",
			es: "Dede-Cortocircuito",
			it: "Cortocircuito Dede",
			pt: "Dedecurto",
			de: "Dede-Kurzschluss"
		},

		effect: {
			en: "You can use this attack only if 1 of your Togedemaru used Toge Dash during your last turn. Your opponent's Active Pokémon is now Paralyzed.",
			fr: "Vous ne pouvez utiliser cette attaque que si l'un de vos Togedemaru a utilisé Toge Ruée pendant votre dernier tour. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Puedes usar este ataque solo si 1 de tus Togedemaru usó Toge Carrera durante tu último turno. El Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Puoi usare questo attacco solo se uno dei tuoi Togedemaru ha usato Togescatto durante il tuo ultimo turno. Il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Você só pode usar este ataque se 1 dos seus Togedemaru usou Arremetoge durante o seu último turno. O Pokémon Ativo do seu oponente agora está Paralisado.",
			de: "Du kannst diese Attacke nur einsetzen, wenn 1 deiner Togedemaru während deines letzten Zuges Toge-Spurt eingesetzt hat. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682132
	}
}

export default card