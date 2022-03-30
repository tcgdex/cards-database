import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Ténéfix",
		es: "Sableye",
		it: "Sableye",
		pt: "Sableye",
		de: "Zobiris"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		302,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bewitching Eyes",
				fr: "Yeux Ensorcelants",
				es: "Ojos Hechizantes",
				it: "Ammaliasguardo",
				pt: "Olhos Enfeitiçantes",
				de: "Bezaubernde Augen"
			},
			effect: {
				en: "Choose a Supporter card from your opponent's discard pile and use it as the effect of this attack.",
				fr: "Choisissez une carte Supporter de la pile de défausse de votre adversaire et utilisez-la en tant qu'effet de cette attaque.",
				es: "Elige 1 carta de Partidario de la pila de descartes de tu rival y úsala como efecto de este ataque.",
				it: "Scegli una carta Aiuto dalla pila degli scarti del tuo avversario e usala come effetto di questo attacco.",
				pt: "Escolha um card de Apoiador na pilha de descarte do seu oponente e use-o como o efeito deste ataque.",
				de: "Wähle 1 Unterstützerkarte aus dem Ablagestapel deines Gegners und verwende sie als Effekt dieses Angriffs."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Furtive Drop",
				fr: "Chute Furtive",
				es: "Caída Furtiva",
				it: "Lascito Furtivo",
				pt: "Gota Furtiva",
				de: "Hinterhältiger Fall"
			},
			effect: {
				en: "Put 3 damage counters on your opponent's Active Pokémon.",
				fr: "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
				es: "Pon 3 contadores de daño en el Pokémon Activo de tu rival.",
				it: "Metti tre segnalini danno sul Pokémon attivo del tuo avversario.",
				pt: "Coloque 3 contadores de danos no Pokémon Ativo do seu oponente.",
				de: "Lege 3 Schadensmarken auf das Aktive Pokémon deines Gegners."
			},

		},
	],


	retreat: 1,



}

export default card
