import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Unown P",
         ja: "未定のp",
         fr: "Unwn",
         de: "Unown p",
         es: "Sin own p",
         it: "Unown p",
         pt: "Unown p",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [201],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "PERFORM [Perform]",
            ja: "実行[実行]",
            fr: "Interpréter [interpréter]",
            de: "Durchführen [ausführen]",
            es: "Realizar [realizar]",
            it: "Esegui [Esegui]",
            pt: "Executar [executar]",
          },
          effect: {
            en: "If an attack damaged Unown [P] during your opponent's last turn and Unown [P] was your Active Pokmon, Unown [P]'s Hidden Power attack does that much more damage to the Defending Pokmon. This power can be used even if Unown [P] is Confused.",
            ja: "攻撃が対戦相手の最後のターン中に[P]に損傷を受けていない場合、[P]がアクティブなポクモンであった場合、[P]の隠されたパワーアタックは、防御するポクモンにはるかに多くのダメージを与えます。このパワーは、[P]が混乱していなくても使用できます。",
            fr: "Si une attaque a endommagé [P] pendant le dernier virage de votre adversaire et que non-bas [p] était votre pokmon actif, l'attaque de puissance cachée de [P] de [P] fait beaucoup plus de dégâts au Pokmon en défense. Ce pouvoir peut être utilisé même si non-bas [p] est confus.",
            de: "Wenn ein Angriff unown [p] während der letzten Runde Ihres Gegners und Unown [p] Ihr aktives Pokmon beschädigt hat, verursacht Unown [P] den versteckten Power -Angriff von Unown so viel mehr Schaden für das verteidigende Pokmon. Diese Kraft kann auch dann eingesetzt werden, wenn Unown [P] verwirrt ist.",
            es: "Si un ataque dañado a Under [P] durante el último turno de tu oponente y Unwown [P] fue tu Pokmon activo, el ataque de poder oculto de UNDOW [P] hace mucho más daño al Pokmon defensor. Este poder se puede usar incluso si no se confunde [P].",
            it: "Se un attacco danneggiato UNOW [P] durante l'ultimo turno del tuo avversario [P] è stato il tuo Pokmon attivo, l'attacco di potere nascosto di UNOW [P] fa molto più danni ai Pokmon in carica. Questa potenza può essere usata anche se Unwnown [P] è confuso.",
            pt: "Se um ataque danificou o UNOWN [P] durante o último turno do seu oponente e o UNOWN [P] foi o seu Pokmon ativo, o ataque de poder oculto de Unwn [P] causa muito mais dano ao Pokmon defensor. Esse poder pode ser usado mesmo que o UNOWN [P] esteja confuso.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Hidden Power",
            ja: "隠された力",
            fr: "Pouvoir caché",
            de: "Versteckte Kraft",
            es: "Poder oculto",
            it: "Potere nascosto",
            pt: "Poder oculto",
          },
          damage: 10,
        },
      ],

      retreat: 1,

};
