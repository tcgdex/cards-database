import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Typhlosion",
		fr: "Typhlosion de Hisui",
		es: "Typhlosion de Hisui",
		it: "Typhlosion di Hisui",
		pt: "Typhlosion de Hisui",
		de: "Hisui-Tornupto"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		en: "Quilava",
		fr: "Feurisson",
		es: "Quilava",
		it: "Quilava",
		pt: "Quilava",
		de: "Igelavar"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Supernatural Orb",
			fr: "Orbe Surnaturel",
			es: "Orbe Sobrenatural",
			it: "Sfera Soprannaturale",
			pt: "Esfera Sobrenatural",
			de: "Übernatürlicher Orb"
		},

		effect: {
			en: "You must discard a Psychic Energy card from your hand in order to use this Ability. Once during your turn, you may make your opponent's Active Pokémon Burned and Confused.",
			fr: "Vous devez défausser une carte Énergie Psychic de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé et Confus.",
			es: "Debes descartar 1 carta de Energía Psychic de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes dejar al Pokémon Activo de tu rival Confundido y Quemado.",
			it: "Devi scartare una carta Energia Psychic che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario bruciato e confuso.",
			pt: "Você deve descartar 1 carta de Energia Psychic da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá deixar o Pokémon Ativo do seu oponente Confuso e Queimado.",
			de: "Du musst 1 Psychic-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du das Aktive Pokémon deines Gegners verbrennen und verwirren."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Shadow Bind",
			fr: "Étreinte d'Ombre",
			es: "Atadura Sombría",
			it: "Legami d'Ombra",
			pt: "Aprisionamento Sombrio",
			de: "Schattenbindung"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 90
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