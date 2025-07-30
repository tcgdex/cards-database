import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [233],
	set: Set,

	name: {
		en: "Porygon2",
		fr: "Porygon2",
		es: "Porygon2",
		it: "Porygon2",
		pt: "Porygon2",
		de: "Porygon2"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Porygon",
		fr: "Porygon",
		es: "Porygon",
		it: "Porygon",
		pt: "Porygon",
		de: "Porygon"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Garbage Attack",
			fr: "Attaque Décharge",
			es: "Ataque Basura",
			it: "Attacco Spazzatura",
			pt: "Golpe de Lixo",
			de: "Abfallangriff"
		},

		effect: {
			en: "This attack does 20 damage for each Pokémon Tool card in the Lost Zone (both yours and your opponent's).",
			fr: "Cette attaque inflige 20 dégâts pour chaque carte Outil Pokémon dans la Zone Perdue (la vôtre et celle de votre adversaire).",
			es: "Este ataque hace 20 puntos de daño por cada carta de Herramienta Pokémon en la Zona Perdida (tanto tuyascomode tu rival).",
			it: "Questo attacco infligge 20 danni per ogni carta Oggetto Pokémon nell'area perduta, sia tua che del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano para cada carta de Ferramenta Pokémon na Zona Perdida (suas e do seu oponente).",
			de: "Diese Attacke fügt für jede Pokémon-Ausrüstung im Nirgendwo (deinem und dem deines Gegners) 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674151
	}
}

export default card