import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Hatterene",
		fr: "Sorcilence",
		es: "Hatterene",
		it: "Hatterene",
		pt: "Hatterene",
		de: "Silembrim"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Hattrem",
		fr: "Chapotus",
		es: "Hattrem",
		it: "Hattrem",
		pt: "Hattrem",
		de: "Brimano"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Witch Rondo",
			fr: "Rondo Envoûtant",
			es: "Rondó de Hechicera",
			it: "Stregarondò",
			pt: "Cântico Bruxo",
			de: "Hexenrondo"
		},

		effect: {
			en: "Once during your turn, you may switch your Active Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez échanger votre Pokémon Actif contre l'un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			es: "Una vez durante tu turno, puedes cambiar tu Pokémon Activo por 1 de tus Pokémon en Banca. Si lo haces, tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
			it: "Una sola volta durante il tuo turno, puoi scambiare il tuo Pokémon attivo con uno della tua panchina. Se lo fai, il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
			pt: "Uma vez durante o seu turno, você poderá trocar o seu Pokémon Ativo por 1 dos seus Pokémon no Banco. Se fizer isto, o seu oponente trocará o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			de: "Einmal während deines Zuges kannst du dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank austauschen. Wenn du das machst, tauscht dein Gegner sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
		}
	}],

	attacks: [{
		name: {
			en: "Psychic",
			fr: "Psyko",
			es: "Psíquico",
			it: "Psichico",
			pt: "Psíquico",
			de: "Psychokinese"
		},

		effect: {
			en: "This attack does 50 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 50 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 50 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "If you're too loud around it, you risk being torn apart by the claws on its tentacle. This Pokémon is also known as the Forest Witch."
	}
}

export default card
