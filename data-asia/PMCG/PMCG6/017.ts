import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Venusaur",
         ja: "エリカの金星",
         fr: "Venusaur d'Erika",
         de: "Erikas Venusaurier",
         es: "Venusaur de Erika",
         it: "Venusaur di Erika",
         pt: "Venusaur de Erika",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [3],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Growth",
            ja: "成長",
            fr: "Croissance",
            de: "Wachstum",
            es: "Crecimiento",
            it: "Crescita",
            pt: "Crescimento",
          },
          effect: {
            en: "Flip a coin. If heads, you may attach up to 2 Grass Energy cards from your hand to Erika's Venusaur.",
            ja: "コインをひっくり返します。頭の場合、あなたの手からエリカの金星に最大2匹の草のエネルギーカードを取り付けることができます。",
            fr: "Retourner une pièce. Si les têtes, vous pouvez attacher jusqu'à 2 cartes d'énergie de l'herbe de votre main à Venusaur d'Erika.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, können Sie bis zu 2 Grasergiekarten von Ihrer Hand an Erikas Venusaurier befestigen.",
            es: "Voltea una moneda. Si se dirige, puede unir a 2 tarjetas de energía de hierba desde su mano a Venusaur de Erika.",
            it: "Capovolgi una moneta. Se la testa, puoi attaccare fino a 2 carte di energia dell'erba dalla tua mano al Venusaur di Erika.",
            pt: "Vire uma moeda. Se as cabeças, você poderá anexar até 2 cartões de energia da sua mão ao Venusaur de Erika.",
          },
        },
        {
          cost: ["Grass", "Grass", "Grass", "Grass"],
          name: {
            en: "Wide Solarbeam",
            ja: "広い太陽光",
            fr: "Grand solaire",
            de: "Breites Solarbon",
            es: "Buque solar amplio",
            it: "Ampio solare",
            pt: "Amplo solarbeam",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, choose 2 of them (or 1 if he or she only has 1). This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手がベンチポケモンを持っている場合は、2つのポケモンを選択します（または、1つしかない場合は1つ）。この攻撃は、それぞれに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si votre adversaire a des pokemon bancés, choisissez 2 d'entre eux (ou 1 s'il en a seulement 1). Cette attaque fait 20 dégâts à chacun d'eux. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 2 davon (oder 1, wenn er nur 1 hat). Dieser Angriff schädigt jeweils 20 von ihnen. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si tu oponente tiene algún Pokémon en banca, elija 2 de ellos (o 1 si solo tiene 1). Este ataque hace 20 daños a cada uno de ellos. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se il tuo avversario ha dei Pokemon in panchina, scegline 2 (o 1 se ha solo 1). Questo attacco fa 20 danni a ciascuno di essi. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha 2 deles (ou 1 se ele ou ela tiver apenas 1). Este ataque causa 20 danos a cada um deles. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
