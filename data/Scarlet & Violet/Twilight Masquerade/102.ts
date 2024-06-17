import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [476],
	set: Set,

	name: {
		en: "Probopass",
		fr: "Tarinorme",
		es: "Probopass",
		it: "Probopass",
		pt: "Probopass",
		de: "Voluminas"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Assault Laser",
			fr: "Laser d'Assaut",
			es: "Láser de Asalto",
			it: "Laserassalto",
			pt: "Laser de Ataque",
			de: "Offensiv-Laser"
		},

		effect: {
			en: "If your opponent's Active Pokémon has a Pokémon Tool attached, this attack does 80 more damage.",
			fr: "Si un Outil Pokémon est attaché au Pokémon Actif de votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival tiene una Herramienta Pokémon unida, este ataque hace 80 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha una carta Oggetto Pokémon assegnata, questo attacco infligge 80 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn an das Aktive Pokémon deines Gegners eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Land Crush",
			fr: "Écras'Terre",
			es: "Aterrizaje",
			it: "Schiacciaterra",
			pt: "Aperto de Terra",
			de: "Schollenbrecher"
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card