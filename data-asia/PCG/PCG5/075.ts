import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Aggron",
         ja: "アグロン",
         fr: "Aggron",
         de: "Aggron",
         es: "Aglia",
         it: "Aggron",
         pt: "Aggron",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [306],
      hp: 110,
      types: ["Metal"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Heavy Blow",
            ja: "重い打撃",
            fr: "Coup dur",
            de: "Schwerer Schlag",
            es: "Golpe fuerte",
            it: "SUGGERIMENTO PESERE",
            pt: "Golpe pesado",
          },
          effect: {
            en: "Does 70 damage minus 10 damage for each damage counter on Aggron. If Aggron has any React Energy cards attached to it, this attack does 70 damage instead.",
            ja: "Aggronのダメージカウンターごとに70ダメージから10ダメージを差し引いた。 AggronにはReact Energy Cardが接続されている場合、この攻撃は代わりに70のダメージを与えます。",
            fr: "Fait 70 dégâts moins 10 dégâts pour chaque compteur de dégâts sur Aggron. If Aggron has any React Energy cards attached to it, this attack does 70 damage instead.",
            de: "Schädigt 70 Schäden minus 10 Schäden für jeden Schadenschalter auf Aggron. Wenn Aggron React Energy -Karten daran befestigt ist, verursacht dieser Angriff stattdessen 70 Schaden.",
            es: "Hace 70 daños menos 10 daños por cada contador de daño en Aggron. Si Aggron tiene alguna tarjetas de energía reaccionadas adjuntas, este ataque hace 70 daños en su lugar.",
            it: "Fa 70 danni meno 10 danni per ciascun danno da contatore su Aggron. Se Aggron ha delle carte di energia react attaccate ad esso, questo attacco infligge invece 70 danni.",
            pt: "70 danos menos 10 danos para cada contador de danos no Aggron. Se o Aggron tiver algum cartão de energia do React anexado a ele, esse ataque causará 70 danos.",
          },
        },
        {
          cost: ["Fighting", "Metal", "Colorless", "Colorless"],
          name: {
            en: "Bound Crush",
            ja: "バウンドクラッシュ",
            fr: "Coup de cœur lié",
            de: "Gebundener Schwarm",
            es: "Atasco atado",
            it: "Cotta legata",
            pt: "Esmagamento ligado",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 60 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.) During your next turn, Aggron can't use Bound Crush.",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに60のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）次のターン中、アグロンはバウンドクラッシュを使用できません。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 60 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Pendant votre prochain tour, Aggron ne peut pas utiliser Crush Bound.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 60. (Wenden Sie keine Schwäche und Widerstand für Bank -Pokémon an.) Während Ihrer nächsten Runde kann Aggron nicht gebundene Quetsche verwenden.",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 60 daños a ese Pokémon. (No aplique debilidad y resistencia para los Pokémon de banca). Durante su próximo turno, Aggron no puede usar Crush Bound.",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 60 danni a quel Pokemon. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Durante il turno successivo, Aggron non può usare una cotta legata.",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 60 danos a esse Pokémon. (Não aplique fraqueza e resistência ao Pokemon em bancada.) Durante o próximo turno, o Aggron não pode usar o Bound Crush.",
          },
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
