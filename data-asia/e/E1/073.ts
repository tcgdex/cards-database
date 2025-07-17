import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Rapidash - 073/128",
         ja: "Rapidash -073/128",
         fr: "Rapidash - 073/128",
         de: "Rapidash - 073/128",
         es: "Rapidash - 073/128",
         it: "Rapidash - 073/128",
         pt: "Rapidash - 073/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [78],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Overrun",
            ja: "オーバーラン",
            fr: "Envahi",
            de: "Überrannt",
            es: "Invadir",
            it: "Invaso",
            pt: "Overnun",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, flip a coin. If heads, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "相手がベンチ付きポケモンを持っている場合は、コインをひっくり返します。ヘッドの場合、それらのうちの1つを選択すると、この攻撃はそれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si votre adversaire a des pokemon bancés, retournez une pièce. Si les têtes, choisissez 1 d'entre elles et cette attaque en fait 10 dégâts. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Ihr Gegner Pokémon mit Bank hat, drehen Sie eine Münze. Wenn Sie Köpfe haben, wählen Sie 1 davon und dieser Angriff schädigt 10. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si tu oponente tiene algún Pokémon de banca, voltea una moneda. Si se dirige, elija 1 de ellos y este ataque le da 10 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se il tuo avversario ha un Pokemon in panchina, capovolgi una moneta. Se le teste, scegli 1 e questo attacco fa 10 danni ad esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, vire uma moeda. Se as cabeças, escolha 1 delas e este ataque causará 10 danos a ele. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 20,
        },
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Flame Tail",
            ja: "炎の尾",
            fr: "Queue de flamme",
            de: "Flammenschwanz",
            es: "Cola de llamas",
            it: "Coda di fiamma",
            pt: "Cauda de chama",
          },
          damage: 40,
        },
      ],


      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
