import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Mimikyu",
		fr: "Mimiqui de la Team Rocket",
		de: "Team Rockets Mimigma",
		it: "Mimikyu del Team Rocket",
		es: "Mimikyu del Team Rocket",
		pt: "Mimikyu da Equipe Rocket",
		'es-mx': "Mimikyu del Equipo Rocket"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Gemstone Mimicry",
			fr: "Gemme Mimique",
			de: "Edelstein-Imitation",
			it: "Imitagemma",
			es: "Mimetismo Gema",
			pt: "Mimetismo de Joias",
			'es-mx': "Gema de Imitación"
		},

		effect: {
			en: "Choose 1 of your opponent's Active Tera Pokémon's attacks and use it as this attack.",
			fr: "Choisissez l'une des attaques du Pokémon Téracristal Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			de: "Wähle 1 Attacke des Aktiven Terakristall-Pokémon deines Gegners und setze sie als diese Attacke ein.",
			it: "Scegli un attacco del Pokémon Teracristal attivo del tuo avversario e usalo al posto di questo attacco.",
			es: "Elige uno de los ataques del Pokémon Teracristal Activo de tu rival y úsalo para este ataque.",
			pt: "Escolha 1 dos ataques do Pokémon Tera Ativo do seu oponente e use-o como este ataque.",
			'es-mx': "Elige 1 de los ataques del Pokémon Teracristal Activo de tu rival y úsalo como este ataque."
		}
	}],

	retreat: 0,
	regulationMark: "I"
}

export default card