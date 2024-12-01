import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Ledian",
		fr: "Coxyclaque",
		es: "Ledian",
		it: "Ledian",
		pt: "Ledian",
		de: "Ledian"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Glittering Star Pattern",
			fr: "Motif Étoile Scintillante",
			es: "Motivo de Estrellas Brillantes",
			it: "Motivo Stellato Brillante",
			pt: "Pintas de Estrelas Cintilantes",
			de: "Funkelndes Sternenmuster"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch in 1 of your opponent's Benched Pokémon that has 90 HP or less remaining to the Active Spot.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez envoyer sur le Poste Actif l'un des Pokémon de Banc de votre adversaire auquel il reste 90 PV ou moins.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes cambiar 1 de los Pokémon en Banca de tu rival al que le queden 90 PS o menos por el Pokémon que esté en el Puesto Activo.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi sostituire uno dei Pokémon nella panchina del tuo avversario che ha 90 PS o meno rimanenti con il suo Pokémon in posizione attiva.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá mandar 1 dos Pokémon no Banco do seu oponente que tiver PS restante de 90 ou menos para o Campo Ativo.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Pokémon von der Bank deines Gegners, das 90 oder weniger verbleibende KP hat, in die Aktive Position einwechseln."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Swift",
			fr: "Météores",
			es: "Meteoros",
			it: "Comete",
			pt: "Ataque Veloz",
			de: "Sternschauer"
		},

		effect: {
			en: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia, ni por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 70
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card