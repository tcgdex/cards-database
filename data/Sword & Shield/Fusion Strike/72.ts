import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [555],
	set: Set,

	name: {
		en: "Galarian Darmanitan",
		fr: "Darumacho de Galar",
		es: "Darmanitan de Galar",
		it: "Darmanitan di Galar",
		pt: "Darmanitan de Galar",
		de: "Galar-Flampivian"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Galarian Darumaka",
		fr: "Darumarond de Galar",
		es: "Darumaka de Galar",
		it: "Darumaka di Galar",
		pt: "Darumaka de Galar",
		de: "Galar-Flampion"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "SATOSHI NAKAI",

	description: {
		en: "Though it has a gentle disposition, it's also very strong. It will quickly freeze the snowball on its head before going for a headbutt."
	},

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Powder Snow",
			fr: "Poudreuse",
			de: "Pulverschnee",
			es: "Nieve Polvo",
			pt: "Neve em Pó",
			it: "Polneve"
		},

		damage: 30,

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Daruma Headbutt",
			fr: "Coup d'Boule Daruma",
			de: "Daruma-Kopfnuss",
			es: "Cabezazo Daruma",
			pt: "Darumacabeçada",
			it: "Bottintesta Daruma"
		},

		damage: 130,

		effect: {
			en: "If this Pokémon has any damage counters on it, this attack can be used for {W}.",
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque peut être utilisée pour {W}.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, kann diese Attacke für {W} eingesetzt werden.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque se puede usar por 1 Energía {W}.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque poderá ser usado por {W}.",
			it: "Se questo Pokémon ha dei segnalini danno, il costo di questo attacco è {W}."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582206,
		tcgplayer: 253222
	}
}

export default card