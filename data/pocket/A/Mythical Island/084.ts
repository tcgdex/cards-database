import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Aerodactyl ex",
		'fr-fr': "Ptéra-ex",
		'es-es': "Aerodactyl ex",
		'it-it': "Aerodactyl-ex",
		'de-de': "Aerodactyl-ex",
		'pt-br': "Aerodactyl ex",
		'ko-kr': "프테라 ex"
	},

	illustrator: "danciao",
	category: "Pokemon",

	dexId: [142],
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Old Amber"
	},
	
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Primeval Law",
			'fr-fr': "Ordre Primitif",
			'es-es': "Ley Primitiva",
			'it-it': "Editto Primordiale",
			'de-de': "Gesetz der Urzeit",
			'pt-br': "Lei Rudimentar",
			'ko-kr': "원시의결정"
		},

		effect: {
			'en-us': "Your opponent can't play any Pokémon from their hand to evolve their Active Pokémon.",
			'fr-fr': "Votre adversaire ne peut pas jouer de Pokémon de sa main sur le Pokémon Actif pour le faire évoluer.",
			'es-es': "Tu rival no puede jugar ningún Pokémon de su mano para hacer evolucionar al Pokémon Activo.",
			'it-it': "Il tuo avversario non può giocare Pokémon dalla sua mano per far evolvere il Pokémon in posizione attiva.",
			'de-de': "Dein Gegner kann keine Pokémon aus seiner Hand spielen, um sein Aktives Pokémon zu entwickeln.",
			'pt-br': "O seu oponente não poderá jogar nenhum Pokémon da mão dele para evoluir o Pokémon Ativo dele.",
			'ko-kr': "이 포켓몬이 있는 한, 상대는 패에서 포켓몬을 꺼내서 배틀 포켓몬을 진화시킬 수 없다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Land Crush",
			'fr-fr': "Écras'Terre",
			'es-es': "Aterrizaje",
			'it-it': "Schiacciaterra",
			'de-de': "Schollenbrecher",
			'pt-br': "Aperto de Terra",
			'ko-kr': "랜드크래시"
		},

		damage: 80,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Star"
}

export default card