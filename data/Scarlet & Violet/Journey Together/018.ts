import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [908],
	set: Set,

	name: {
		en: "Meowscarada",
		fr: "Miascarade",
		es: "Meowscarada",
		de: "Maskagato",
		it: "Meowscarada",
		pt: "Meowscarada",
		'es-mx': "Meowscarada"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Showtime",
			fr: "Entrée en Scène",
			es: "Hora del Espectáculo",
			de: "Showtime",
			it: "Ora della Ribalta",
			pt: "Hora do Show",
			'es-mx': "Hora del Show"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is on your Bench, you may switch it with your Active Pokémon.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez l'échanger contre votre Pokémon Actif.",
			es: "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes cambiarlo por tu Pokémon Activo.",
			de: "Einmal während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du es gegen dein Aktives Pokémon austauschen.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi scambiarlo con il tuo Pokémon attivo.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá trocá-lo pelo seu Pokémon Ativo.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes cambiarlo por tu Pokémon Activo."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rising Bloom",
			fr: "Floraison Ascendante",
			es: "Floración Creciente",
			de: "Aufblühen",
			it: "Fioritura Crescente",
			pt: "Florescer Crescente",
			'es-mx': "Floración Creciente"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 90 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 90 puntos de daño más.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 90 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 90 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 90 puntos de daño más."
		},

		damage: "90+"
	}],

	retreat: 1,
	regulationMark: "I",
	illustrator: "kodama",

	thirdParty: {
		cardmarket: 817170
	},

	variants: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
	]
}

export default card