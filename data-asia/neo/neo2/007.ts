import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Kakuna",
         ja: "カクナ",
         fr: "Kakuna",
         de: "Kakuna",
         es: "Kakuna",
         it: "Kakuna",
         pt: "Kakuna",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [14],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Secrete Poison",
            ja: "毒を分泌します",
            fr: "Sécréter le poison",
            de: "Gift sezern",
            es: "Secretar veneno",
            it: "Secrete Poison",
            pt: "Secrete Poison",
          },
          effect: {
            en: "During your opponent's next turn, whenever your opponent's attack damages Kakuna (even if Kakuna is Knocked Out), your opponent's Active Pokemon is now Poisoned and Kakuna does 10 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手の次のターン中、相手の攻撃がカクナに損害を与えるときはいつでも（カクナがノックアウトされたとしても）、相手のアクティブなポケモンが毒され、カクナは相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Au cours du prochain tour de votre adversaire, chaque fois que l'attaque de votre adversaire endommage Kakuna (même si Kakuna est éliminée), le pokemon actif de votre adversaire est maintenant empoisonné et Kakuna fait 10 dégâts à chacun des pokémon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Während der nächsten Runde Ihres Gegners, wenn der Angriff Ihres Gegners Kakuna schadet (auch wenn Kakuna ausgeschaltet ist), ist das aktive Pokémon Ihres Gegners jetzt vergiftet und Kakuna schädigt 10 Schaden an den Bankpokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Durante el próximo turno de tu oponente, cada vez que el ataque de tu oponente daña a Kakuna (incluso si Kakuna es noqueada), el Pokémon activo de tu oponente ahora está envenenado y Kakuna hace 10 daños a cada Pokémon en banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Durante il prossimo turno del tuo avversario, ogni volta che l'attacco del tuo avversario danneggia Kakuna (anche se Kakuna viene eliminata), il Pokemon attivo del tuo avversario viene ora avvelenato e Kakuna fa 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Durante o próximo turno do seu oponente, sempre que o ataque do seu oponente danifica Kakuna (mesmo que Kakuna seja nocauteado), o Pokémon ativo do seu oponente agora está envenenado e Kakuna causa 10 danos a Pokémon em banco de cada oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
