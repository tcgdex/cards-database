import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Linoone",
		fr: "Linéon",
		es: "Linoone",
		'es-mx': "Linoone",
		de: "Geradaks",
		it: "Linoone",
		pt: "Linoone"
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [264],
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",
	dexId: [264],

	abilities: [{
		type: "Ability",

		name: {
			en: "Excited Dash",
			fr: "Ruée Dynamique",
			es: "Impulso Veloz",
			'es-mx': "Arranque Vibrante",
			de: "Begeisterter Spurt",
			it: "Fervorscatto",
			pt: "Disparada Animada"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is on your Bench, and if you have any Mega Evolution Pokémon ex in play, you may use this Ability. Switch this Pokémon with your Active Pokémon.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, et si vous avez au moins un Pokémon-ex Méga-Évolution en jeu, vous pouvez utiliser ce talent. Échangez ce Pokémon contre votre Pokémon Actif.",
			es: "Una vez durante tu turno, si este Pokémon está en tu Banca y tienes algún Pokémon ex Megaevolución en juego, puedes usar esta habilidad. Cambia este Pokémon por tu Pokémon Activo.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en tu Banca y tienes algún Pokémon ex Megaevolución en juego, puedes usar esta Habilidad. Cambia este Pokémon por tu Pokémon Activo.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon auf deiner Bank ist und wenn du mindestens 1 Mega-Entwicklungs-Pokémon-ex im Spiel hast, kannst du diese Fähigkeit einsetzen. Tausche dieses Pokémon gegen dein Aktives Pokémon aus.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina e hai dei Pokémon-ex Megaevoluzione in gioco, puoi usare questa abilità. Scambia questo Pokémon con il tuo Pokémon attivo.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco e se você tiver algum Pokémon ex de Megaevolução em jogo, você poderá usar esta Habilidade. Troque este Pokémon pelo seu Pokémon Ativo."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			'es-mx': "Cuchillada",
			de: "Schlitzer",
			it: "Lacerazione",
			pt: "Talho"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857657
	}
}

export default card