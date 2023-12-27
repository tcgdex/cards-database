import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Diancie",
		fr: "Diancie",
		es: "Diancie",
		it: "Diancie",
		pt: "Diancie",
		de: "Diancie"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Princess's Curtain",
			fr: "Rideau de Princesse",
			es: "Cortina de la Princesa",
			it: "Sipario della Principessa",
			pt: "Cortina da Princesa",
			de: "Schleier der Prinzessin"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to your Benched Basic Pokémon.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte sur vos Pokémon de Banc de base.",
			es: "Mientras este Pokémon esté en el Puesto Activo, cada vez que tu rival juegue 1 carta de Partidario de su mano, evita todos los efectos de esa carta infligidos a tus Pokémon Básicos en Banca.",
			it: "Fintanto che questo Pokémon è in posizione attiva, ogni volta che il tuo avversario gioca una carta Aiuto dalla sua mano, previeni tutti gli effetti di quella carta sui tuoi Pokémon Base in panchina.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, sempre que seu oponente jogar 1 carta de Apoiador da própria mão, previna todos os efeitos daquela carta causados aos seus Pokémon Básicos no Banco.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, verhindere jedes Mal, wenn dein Gegner 1 Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die den Basis-Pokémon auf deiner Bank zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spike Draw",
			fr: "Pique-Pioche",
			es: "Robo Pico",
			it: "Battipesca",
			pt: "Comprada Espinhosa",
			de: "Stachelzug"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		},

		damage: 20
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
