import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Aerodactyl ex",
		fr: "Ptéra-ex",
		es: "Aerodactyl ex",
		it: "Aerodactyl-ex",
		de: "Aerodactyl-ex",
		'pt-br': "Aerodactyl ex",
		ko: "프테라 ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",

	dexId: [142],
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",

	evolveFrom: {
		en: "Old Amber"
	},
	
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Primeval Law",
			fr: "Ordre Primitif",
			es: "Ley Primitiva",
			it: "Editto Primordiale",
			de: "Gesetz der Urzeit",
			'pt-br': "Lei Rudimentar",
			ko: "원시의결정"
		},

		effect: {
			en: "Your opponent can't play any Pokémon from their hand to evolve their Active Pokémon.",
			fr: "Votre adversaire ne peut pas jouer de Pokémon de sa main sur le Pokémon Actif pour le faire évoluer.",
			es: "Tu rival no puede jugar ningún Pokémon de su mano para hacer evolucionar al Pokémon Activo.",
			it: "Il tuo avversario non può giocare Pokémon dalla sua mano per far evolvere il Pokémon in posizione attiva.",
			de: "Dein Gegner kann keine Pokémon aus seiner Hand spielen, um sein Aktives Pokémon zu entwickeln.",
			'pt-br': "O seu oponente não poderá jogar nenhum Pokémon da mão dele para evoluir o Pokémon Ativo dele.",
			ko: "이 포켓몬이 있는 한, 상대는 패에서 포켓몬을 꺼내서 배틀 포켓몬을 진화시킬 수 없다."
		}
	}],

	attacks: [{
		name: {
			en: "Land Crush",
			fr: "Écras'Terre",
			es: "Aterrizaje",
			it: "Schiacciaterra",
			de: "Schollenbrecher",
			'pt-br': "Aperto de Terra",
			ko: "랜드크래시"
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