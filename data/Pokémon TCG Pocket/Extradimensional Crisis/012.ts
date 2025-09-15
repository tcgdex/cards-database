import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Sharpedo",
		fr: "Sharpedo"
	},

	illustrator: "Yumi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Carvanha"
	},

	description: {
		en: "As soon as it catches the scent of prey, Sharpedo\nwill jet seawater from its backside, hurtling\ntoward the target to attack at 75 mph.",
		fr: "Dès qu'il détecte l'odeur d'une proie, il fonce sur elle à une vitesse de 120 km/h en propulsant de l'eau de mer par son postérieur."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Crunch",
			fr: "Mâchouille"
		},

		damage: 50,
		cost: ["Water", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card