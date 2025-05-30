import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Meowscarada",
		fr: "Miascarade",
		de: "Maskagato",
		it: "Meowscarada",
		es: "Meowscarada",
		pt: "Meowscarada"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Trick Cape",
			fr: "Cape de Prestidigitation",
			de: "Trickumhang",
			it: "Manteltrucco",
			es: "Truquicapa",
			pt: "Capa da Travessura"
		},

		effect: {
			en: "You may put an Energy attached to your opponent's Active Pokémon into their hand.",
			fr: "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
			de: "Du kannst deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand geben.",
			it: "Puoi prendere un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungerla alle carte che ha in mano.",
			es: "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			pt: "Você pode colocar uma Energia ligada ao Pokémon Ativo do seu oponente na mão dele."
		},

		damage: 40
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Flower Blast",
			fr: "Explosion Florale",
			de: "Blumenexplosion",
			it: "Esplosione Floreale",
			es: "Explosión Floral",
			pt: "Flor Explosiva"
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card