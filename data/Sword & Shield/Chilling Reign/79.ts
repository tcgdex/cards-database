import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Sirfetch’d",
		fr: "Palarticho de Galar",
		es: "Sirfetch’d de Galar",
		it: "Sirfetch’d di Galar",
		pt: "Sirfetch’d de Galar",
		de: "Galar-Lauchzelot"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Galarian Farfetch’d",
		fr: "Canarticho de Galar"
	},

	attacks: [{
		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Leek Strike",
			fr: "Coup de Poireau",
			es: "Impacto Puerro",
			it: "Gamboattacco",
			pt: "Pancada Alho-poró",
			de: "Lauchstreich"
		},

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 90 more damage, and this attack’s damage isn’t affected by Resistance.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 90 dégâts supplémentaires et les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			es: "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 90 puntos de daño más, y el daño de este ataque no se ve afectado por Resistencia. ",
			it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 90 danni in più e i suoi danni non sono influenzati dalla resistenza. ",
			pt: "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 90 pontos de dano a mais, e o dano deste ataque não será afetado por Resistência. ",
			de: "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 90 Schadenspunkte mehr zu und der Schaden dieser Attacke wird durch Resistenz nicht verändert. "
		},

		damage: "70+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card