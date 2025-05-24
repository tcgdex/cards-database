import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Meowscarada",
		fr: "Miascarade",
		es: "Meowscarada",
		it: "Meowscarada",
		pt: "Meowscarada",
		de: "Maskagato"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	evolveFrom: {
		en: "Floragato"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Trick Cape",
			fr: "Cape de Prestidigitation",
			es: "Truquicapa",
			it: "Manteltrucco",
			pt: "Capa da Travessura",
			de: "Trickumhang"
		},

		effect: {
			en: "You may put an Energy attached to your opponent's Active Pokémon into their hand.",
			fr: "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
			es: "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			it: "Puoi prendere un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungerla alle carte che ha in mano.",
			pt: "Você pode colocar uma Energia ligada ao Pokémon Ativo do seu oponente na mão dele.",
			de: "Du kannst deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand geben."
		},

		damage: 40
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Flower Blast",
			fr: "Explosion Florale",
			es: "Explosión Floral",
			it: "Esplosione Floreale",
			pt: "Flor Explosiva",
			de: "Blumenexplosion"
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Ryota Murayama"
}

export default card