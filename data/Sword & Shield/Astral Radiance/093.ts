import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Sneasler",
		fr: "Farfurex de Hisui",
		es: "Sneasler de Hisui",
		it: "Sneasler di Hisui",
		pt: "Sneasler de Hisui",
		de: "Hisui-Snieboss"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Hisuian Sneasel",
		fr: "Farfuret de Hisui",
		es: "Sneasel de Hisui",
		it: "Sneasel di Hisui",
		pt: "Sneasel de Hisui",
		de: "Hisui-Sniebel"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Carry and Climb",
			fr: "Attrape et Grimpe",
			es: "Cargar y Escalar",
			it: "Piglia e Arrampicati",
			pt: "Pegar e Escalar",
			de: "Tragen und klettern"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, your Active Pokémon's Retreat Cost is ColorlessColorless less.",
			fr: "Tant que ce Pokémon est sur votre Banc, le Coût de Retraite de votre Pokémon Actif est diminué de ColorlessColorless.",
			es: "Mientras este Pokémon esté en tu Banca, el Coste de Retirada de tu Pokémon Activo es de ColorlessColorless menos.",
			it: "Fintanto che questo Pokémon è nella tua panchina, il costo di ritirata del tuo Pokémon attivo è ridotto di ColorlessColorless.",
			pt: "Enquanto este Pokémon estiver no seu Banco, o custo de Recuo do seu Pokémon Ativo será ColorlessColorless a menos.",
			de: "Solange sich dieses Pokémon auf deiner Bank befindet, verringern sich die Rückzugskosten deines Aktiven Pokémon um ColorlessColorless."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra",
			de: "Klauenschlitzer"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
