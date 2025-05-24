import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Palmaval-ex",
		en: "Quaquaval ex",
		es: "Quaquaval ex",
		it: "Quaquaval-ex",
		pt: "Quaquaval ex",
		de: "Bailonda-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Danse Palpitante",
			en: "Exciting Dance",
			es: "Baile Apasionante",
			it: "Danza Coinvolgente",
			pt: "Samba Empolgante",
			de: "Mitreißender Tanz"
		},

		effect: {
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc. Dans ce cas, envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			en: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca. Si lo haces, mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			it: "Scambia questo Pokémon con uno della tua panchina. Se lo fai, sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco. Se fizer isto, mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 60
	}, {
		cost: ["Water", "Colorless"],

		name: {
			fr: "Tir en Spirale",
			en: "Spiral Shot",
			es: "Lanzamiento en Espiral",
			it: "Spiralcolpo",
			pt: "Disparo Espiral",
			de: "Spiralschuss"
		},

		effect: {
			fr: "Ajoutez à votre main 2 Énergies attachées à ce Pokémon.",
			en: "Put 2 Energy attached to this Pokémon into your hand.",
			es: "Pon 2 Energías unidas a este Pokémon en tu mano.",
			it: "Prendi due Energie assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
			pt: "Coloque 2 Energias ligadas a este Pokémon na sua mão.",
			de: "Nimm 2 an dieses Pokémon angelegte Energien auf deine Hand."
		},

		damage: 230
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "5ban Graphics"
}

export default card