import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Arboliva",
		fr: "Arboliva",
		de: "Olithena",
		es: "Arboliva",
		it: "Arboliva",
		pt: "Arboliva",
		'es-mx': "Arboliva"
	},

	illustrator: "Aliya Chen",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Slippery Oil",
			fr: "Huile Glissante",
			de: "Rutschiges Öl",
			es: "Aceite Resbaladizo",
			it: "Olio Scivoloso",
			pt: "Azeite Escorregadio",
			'es-mx': "Aceite Resbaladizo"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Envoyez le Pokémon Actif de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo)."
		}
	}],

	attacks: [{
		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
			de: "Megasauger",
			es: "Megaagotar",
			it: "Megassorbimento",
			pt: "Megadreno",
			'es-mx': "Megadrenado"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon."
		},

		damage: 100,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 727573,
		cardmarket: 918827
	}
}

export default card