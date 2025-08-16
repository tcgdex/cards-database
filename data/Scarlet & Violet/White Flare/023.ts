import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [503],
	set: Set,

	name: {
		en: "Samurott",
		fr: "Clamiral",
		de: "Admurai",
		it: "Samurott",
		pt: "Samurott",
		es: "Samurott",
		'es-mx': "Samurott"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Torrential Whirlpool",
			fr: "Tourbillon Torrentiel",
			de: "Mitreißender Strudel",
			it: "Mulinello Torrenziale",
			pt: "Redemoinho Torrencial",
			es: "Torbellino Torrencial",
			'es-mx': "Remolino Torrencial"
		},

		effect: {
			en: "Once during your turn, you may switch your Active Pokémon with 1 of your Benched Pokémon. If you do, switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Une fois pendant votre tour, vous pouvez échanger votre Pokémon Actif contre l'un de vos Pokémon de Banc. Dans ce cas, envoyez le Pokémon Actif de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			de: "Einmal während deines Zuges kannst du dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank austauschen. Wenn du das machst, wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			it: "Una sola volta durante il tuo turno, puoi scambiare il tuo Pokémon attivo con uno della tua panchina. Se lo fai, sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			pt: "Uma vez durante o seu turno, você poderá trocar o seu Pokémon Ativo por 1 dos seus Pokémon no Banco. Se fizer isto, mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			es: "Una vez durante tu turno, puedes cambiar tu Pokémon Activo por uno de tus Pokémon en Banca. Si lo haces, mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'es-mx': "Una vez durante tu turno, puedes cambiar tu Pokémon Activo por 1 de tus Pokémon en Banca. Si lo haces, mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo)."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Energized Slash",
			fr: "Tranche Énergisée",
			de: "Energiegeladener Schlitzer",
			it: "Lacerazione Energizzata",
			pt: "Talho Energizado",
			es: "Tajo Energético",
			'es-mx': "Cuchillada Energética"
		},

		effect: {
			en: "This attack does 50 more damage for each Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée à ce Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 50 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 50 danni in più per ogni Energia assegnata a questo Pokémon.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada Energia ligada a este Pokémon.",
			es: "Este ataque hace 50 puntos de daño más por cada Energía unida a este Pokémon.",
			'es-mx': "Este ataque hace 50 puntos de daño más por cada Energía unida a este Pokémon."
		},

		damage: "30+"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card