import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Arbok",
         ja: "ダークアーボック",
         fr: "Arbok noir",
         de: "Dunkler Arbok",
         es: "Arbok oscuro",
         it: "Dark Arbok",
         pt: "Arbok escuro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [24],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Stare",
            ja: "見詰める",
            fr: "Regard",
            de: "Starren",
            es: "Mirada fija",
            it: "Fissare",
            pt: "Olhe",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 10 damage to that Pokemon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.) If that Pokemon has a Pokemon Power, that power stops working until the end of your opponent's next turn.",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）そのポケモンにポケモンの力がある場合、そのパワーは相手の次のターンの終わりまで機能しなくなります。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 10 dégâts à ce Pokémon. N'appliquez pas la faiblesse et la résistance pour cette attaque. (Tous les autres effets qui se produiraient après avoir appliqué une faiblesse et une résistance se produisent.) Si ce Pokémon a une puissance Pokémon, ce pouvoir cesse de fonctionner jusqu'à la fin du prochain tour de votre adversaire.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 10. Wenden Sie keine Schwäche und Widerstand für diesen Angriff an. (Alle anderen Effekte, die nach der Anwendung von Schwäche und Widerstand auftreten würden.) Wenn dieses Pokemon eine Pokemon -Kraft hat, funktioniert diese Kraft bis zum Ende der nächsten Runde Ihres Gegners.",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 10 daños a ese Pokémon. No aplique debilidad y resistencia para este ataque. (Cualquier otro efecto que suceda después de aplicar debilidad y resistencia aún ocurre). Si ese Pokémon tiene una potencia de Pokémon, esa potencia deja de funcionar hasta el final del próximo turno de tu oponente.",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 10 danni a quel Pokemon. Non applicare debolezza e resistenza per questo attacco. (Qualsiasi altro effetto che si verificherebbe dopo aver applicato la debolezza e la resistenza ancora.) Se quel Pokemon ha un potere Pokemon, quel potere smette di funzionare fino alla fine del prossimo turno del tuo avversario.",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 10 danos a esse Pokémon. Não aplique fraqueza e resistência a este ataque. (Quaisquer outros efeitos que aconteceriam após aplicar fraqueza e resistência ainda ocorrem.) Se esse Pokemon tiver uma potência de Pokemon, esse poder para de funcionar até o final do próximo turno do seu oponente.",
          },
        },
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Poison Vapor",
            ja: "毒蒸気",
            fr: "Vapeur de poison",
            de: "Giftdampf",
            es: "Vapor venenoso",
            it: "Vapore veleno",
            pt: "Vapor de veneno",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned. This attack does 10 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "防御ポケモンは現在中毒になっています。この攻撃は、相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Le Pokémon en défense est maintenant empoisonné. Cette attaque inflige 10 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Das verteidigende Pokemon ist jetzt vergiftet. Dieser Angriff schädigt 10 das Bankpokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "El Pokémon defensor ahora está envenenado. Este ataque hace 10 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Il Pokemon in carica è ora avvelenato. Questo attacco infligge 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "O Pokémon atual agora está envenenado. Este ataque causa 10 danos a Pokémon com bancada do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 10,
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
