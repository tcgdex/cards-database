import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Thievul",
		fr: "Roublenard",
		es: "Thievul",
		it: "Thievul",
		pt: "Thievul",
		de: "Gaunux"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Nickit",
		fr: "Goupilou",
		es: "Nickit",
		it: "Nickit",
		pt: "Nickit",
		de: "Kleptifux"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Baffling",
			fr: "Déroutant",
			es: "Desconcertar",
			it: "Frastornare",
			pt: "Desconcertante",
			de: "Verblüffen"
		},

		effect: {
			en: "If your opponent has 2 or fewer Prize cards remaining, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to your Benched Pokémon V.",
			fr: "S'il reste 2 cartes Récompense ou moins à votre adversaire, chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte sur vos Pokémon-V de Banc.",
			es: "Si a tu rival le quedan 2 cartas de Premio o menos, cada vez que tu rival juegue 1 carta de Partidario de su mano, evita todos los efectos de esa carta infligidos a tus Pokémon V en Banca.",
			it: "Se il tuo avversario ha due o meno carte Premio rimanenti, ogni volta che gioca una carta Aiuto dalla sua mano, previeni tutti gli effetti di quella carta sui tuoi Pokémon-V in panchina.",
			pt: "Se o seu oponente tiver 2 ou menos cartas de Prêmio restantes, sempre que seu oponente jogar 1 carta de Apoiador da própria mão, previna todos os efeitos daquela carta causados aos seus Pokémon V no Banco.",
			de: "Wenn dein Gegner 2 oder weniger verbleibende Preiskarten hat, verhindere jedes Mal, wenn dein Gegner 1 Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die den Pokémon-V auf deiner Bank zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
			es: "Colmillo Afilado",
			it: "Zannaffilata",
			pt: "Presa Afiada",
			de: "Scharfe Fänge"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card