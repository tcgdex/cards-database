import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Leafeon ex",
		fr: "Phyllali-ex",
		es: "Leafeon ex",
		pt: "Leafeon ex",
		it: "Leafeon-ex",
		de: "Folipurba-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Verdant Storm",
			fr: "Tempête Verdoyante",
			es: "Tormenta Verdosa",
			pt: "Tempestade Verdejante",
			it: "Tempesta Rigogliosa",
			de: "Begrünungssturm"
		},

		effect: {
			en: "This attack does 60 damage for each Energy attached to all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 60 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			es: "Este ataque hace 60 puntos de daño por cada Energía unida a cada uno de los Pokémon de tu rival.",
			pt: "Este ataque causa 60 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
			it: "Questo attacco infligge 60 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			de: "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 60 Schadenspunkte zu."
		},

		damage: "60×"
	}, {
		cost: ["Grass", "Fire", "Water"],

		name: {
			en: "Moss Agate",
			fr: "Agate Moussue",
			es: "Musgo Ágata",
			pt: "Ágata Musgo",
			it: "Agata Muschiata",
			de: "Moosachat"
		},

		effect: {
			en: "Heal 100 damage from each of your Benched Pokémon.",
			fr: "Soignez 100 dégâts de chacun de vos Pokémon de Banc.",
			es: "Cura 100 puntos de daño a cada uno de tus Pokémon en Banca.",
			pt: "Cure 100 pontos de dano de cada um dos seus Pokémon no Banco.",
			it: "Cura ciascuno dei tuoi Pokémon in panchina da 100 danni.",
			de: "Heile 100 Schadenspunkte bei jedem Pokémon auf deiner Bank."
		},

		damage: 230
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card