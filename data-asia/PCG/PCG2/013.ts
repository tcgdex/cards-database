import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Ninjask",
         ja: "ニンジャスク",
         fr: "Ninjasque",
         de: "Ninjask",
         es: "Ninja",
         it: "Ninjask",
         pt: "Ninjask",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [291],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Fast Protection",
            ja: "迅速な保護",
            fr: "Protection rapide",
            de: "Schneller Schutz",
            es: "Protección rápida",
            it: "Protezione rapida",
            pt: "Proteção rápida",
          },
          effect: {
            en: "Prevent all effects, including damage, done to Ninjask by your opponent's attacks from his or her Basic PokÃ©mon.",
            ja: "彼または彼女の基本的なポカンからの相手の攻撃によってニンジャスクに与えられた損傷を含むすべての効果を防ぎます。",
            fr: "Empêchez tous les effets, y compris les dégâts, causés à Ninjask par les attaques de votre adversaire de son poké de base.",
            de: "Verhindern Sie alle Effekte, einschließlich Schäden, die Ninjask durch die Angriffe Ihres Gegners aus seinem oder ihrer grundlegenden Pokémon angerichtet haben.",
            es: "Evite todos los efectos, incluido el daño, realizado a Ninjask por los ataques de su oponente de su Poké básico.",
            it: "Prevenire tutti gli effetti, incluso il danno, fatto a Ninjask dagli attacchi del tuo avversario dal suo poké mon di base.",
            pt: "Evite todos os efeitos, incluindo danos, causados a Ninjask pelos ataques do seu oponente de seu Poké Mon básico.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Swords Dance",
            ja: "剣の踊り",
            fr: "Swords Dance",
            de: "Schwerter tanzen",
            es: "Danza de espadas",
            it: "Danza delle spade",
            pt: "Dança de espadas",
          },
          effect: {
            en: "During your next turn, Ninjask's Slash attack's base damage is 80.",
            ja: "次のターン中、ニンジャスクのスラッシュ攻撃のベースダメージは80です。",
            fr: "Au cours de votre prochain tour, les dégâts de base de Ninjask's Slash Attack sont de 80.",
            de: "Während Ihrer nächsten Kurve beträgt der Basisschäden von Ninjasks Slash Attack 80.",
            es: "Durante su próximo turno, el daño base del ataque de corte de Ninjask es 80.",
            it: "Durante il tuo prossimo turno, il danno base di Ninjask Slash Attack è 80.",
            pt: "Durante o seu próximo turno, o dano básico de Slash ataque de Ninjask é 80.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Slash",
            ja: "スラッシュ",
            fr: "Sabrer",
            de: "Schrägstrich",
            es: "Barra oblicua",
            it: "Barra",
            pt: "Slash",
          },
          damage: 30,
        },
      ],


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
