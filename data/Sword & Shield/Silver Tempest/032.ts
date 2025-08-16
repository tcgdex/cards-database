import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [727],
	set: Set,

	name: {
		en: "Incineroar",
		fr: "Félinferno",
		es: "Incineroar",
		it: "Incineroar",
		pt: "Incineroar",
		de: "Fuegro"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
		es: "Torracat",
		it: "Torracat",
		pt: "Torracat",
		de: "Miezunder"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Secret Attack",
			fr: "Attaque Secrète",
			es: "Ataque Secreto",
			it: "Colpo Segreto",
			pt: "Ataque Secreto",
			de: "Geheimattacke"
		},

		effect: {
			en: "Choose an attack from 1 of this Pokémon's previous Evolutions and use it as this attack.",
			fr: "Choisissez une attaque de l'une des précédentes Évolutions de ce Pokémon et utilisez-la en tant que cette attaque.",
			es: "Elige 1 ataque de 1 de las Evoluciones anteriores de este Pokémon y úsalo para este ataque.",
			it: "Scegli uno degli attacchi degli stadi evolutivi precedenti di questo Pokémon e usalo al posto di questo attacco.",
			pt: "Escolha um ataque de 1 das Evoluções anteriores deste Pokémon e use-o como este ataque.",
			de: "Wähle 1 Attacke einer vorangegangenen Entwicklung dieses Pokémon und setze sie als diese Attacke ein."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Flare Shot",
			fr: "Tir Flambant",
			es: "Disparo Llamarada",
			it: "Colpofiammata",
			pt: "Disparo de Labareda",
			de: "Flackerschuss"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toute l'Énergie de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 180
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682074,
		tcgplayer: 451663
	}
}

export default card