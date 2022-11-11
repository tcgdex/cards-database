import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Braviary",
		fr: "Gueriaigle de Hisui",
		es: "Braviary de Hisui",
		it: "Braviary di Hisui",
		pt: "Braviary de Hisui",
		de: "Hisui-Washakwil"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		en: "Rufflet",
		fr: "Furaiglon",
		es: "Rufflet",
		it: "Rufflet",
		pt: "Rufflet",
		de: "Geronimatz"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Eerie Cry",
			fr: "Cri Inquiétant",
			es: "Llanto Escalofriante",
			it: "Grido Inquietante",
			pt: "Brado Bizarro",
			de: "Schauriger Schrei"
		},

		effect: {
			en: "Put 3 damage counters on each of your opponent's Pokémon that has any damage counters on it.",
			fr: "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire ayant au moins un marqueur de dégâts.",
			es: "Pon 3 contadores de daño en cada uno de los Pokémon de tu rival que tenga algún contador de daño sobre él.",
			it: "Metti tre segnalini danno su ciascuno dei Pokémon del tuo avversario che ha dei segnalini danno.",
			pt: "Coloque 3 contadores de dano em cada um dos Pokémon do seu oponente que tiver algum contador de dano nele.",
			de: "Lege 3 Schadensmarken auf jedes Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Mind Bend",
			fr: "Contrôleur d'Esprit",
			es: "Fusión Mental",
			it: "Fusione Mentale",
			pt: "Dobra Mentes",
			de: "Gedankenverbiegung"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card